from requests import api
import json_repair

from gpt_researcher.llm_provider.generic.base import ReasoningEfforts
from ..utils.llm import create_chat_completion
from ..prompts import generate_search_queries_prompt
from typing import Any, List, Dict
from ..config import Config
import logging

logger = logging.getLogger(__name__)

async def get_search_results(query: str, retriever: Any, query_domains: List[str] = None) -> List[Dict[str, Any]]:
    """
    Get web search results for a given query.

    Args:
        query: The search query
        retriever: The retriever instance

    Returns:
        A list of search results
    """
    return retriever.search(query, query_domains=query_domains)

async def generate_sub_queries(
    query: str,
    parent_query: str,
    report_type: str,
    context: List[Dict[str, Any]],
    cfg: Config,
    cost_callback: callable = None
) -> List[str]:
    """
    Generate sub-queries using the specified LLM model.

    Args:
        query: The original query
        parent_query: The parent query
        report_type: The type of report
        max_iterations: Maximum number of research iterations
        context: Search results context
        cfg: Configuration object
        cost_callback: Callback for cost calculation

    Returns:
        A list of sub-queries
    """
    gen_queries_prompt = generate_search_queries_prompt(
        query,
        parent_query,
        report_type,
        max_iterations=cfg.max_iterations or 3,
        context=context
    )
    
    models = cfg.chat_models
    # Select model with max size
    smart_model = max(models, key=lambda x: x.model_size)
    strategic_model = max(models, key=lambda x: x.model_size)

    try:
        response = await create_chat_completion(
            llm_provider=strategic_model.model,
            model=strategic_model.model,
            base_url=strategic_model.base_url,
            api_key=strategic_model.api_key,
            messages=[
                {"role": "user", "content": gen_queries_prompt}
            ],
            temperature=0.6,
            max_tokens=None,
            llm_kwargs=strategic_model.llm_kwargs,
            reasoning_effort=ReasoningEfforts.High.value,
            cost_callback=cost_callback,
        )
    except Exception as e:
        logger.warning(f"Error with strategic LLM: {e}. Retrying with max_tokens={cfg.strategic_token_limit}.")
        logger.warning(f"See https://github.com/assafelovic/gpt-researcher/issues/1022")
        try:
            response = await create_chat_completion(
                llm_provider=strategic_model.provider,
                model=strategic_model.model,
                base_url=strategic_model.base_url,
                api_key=strategic_model.api_key,
                messages=[{"role": "user", "content": gen_queries_prompt}],
                temperature=1,
                max_tokens=cfg.strategic_token_limit,
                llm_kwargs=strategic_model.llm_kwargs,
                cost_callback=cost_callback,
            )
            logger.warning(f"Retrying with max_tokens={cfg.strategic_token_limit} successful.")
        except Exception as e:
            logger.warning(f"Retrying with max_tokens={cfg.strategic_token_limit} failed.")
            logger.warning(f"Error with strategic LLM: {e}. Falling back to smart LLM.")
            response = await create_chat_completion(
                llm_provider=smart_model.provider,
                model=smart_model.model,
                base_url=smart_model.base_url,
                api_key=smart_model.api_key,
                messages=[{"role": "user", "content": gen_queries_prompt}],
                temperature=cfg.temperature,
                max_tokens=cfg.smart_token_limit,
                llm_kwargs=smart_model.llm_kwargs,
                cost_callback=cost_callback,
            )

    return json_repair.loads(response)

async def plan_research_outline(
    query: str,
    search_results: List[Dict[str, Any]],
    agent_role_prompt: str,
    cfg: Config,
    parent_query: str,
    report_type: str,
    cost_callback: callable = None,
) -> List[str]:
    """
    Plan the research outline by generating sub-queries.

    Args:
        query: Original query
        retriever: Retriever instance
        agent_role_prompt: Agent role prompt
        cfg: Configuration object
        parent_query: Parent query
        report_type: Report type
        cost_callback: Callback for cost calculation

    Returns:
        A list of sub-queries
    """

    sub_queries = await generate_sub_queries(
        query,
        parent_query,
        report_type,
        search_results,
        cfg,
        cost_callback
    )

    return sub_queries
