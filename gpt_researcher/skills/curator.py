from typing import Dict, Optional, List, TYPE_CHECKING
import json

from gpt_researcher.config.variables import base
from ..config.config import Config
from ..utils.llm import create_chat_completion
from ..prompts import curate_sources as rank_sources_prompt
from ..actions import stream_output

if TYPE_CHECKING:
    from gpt_researcher.agent import GPTResearcher

class SourceCurator:
    """Ranks sources and curates data based on their relevance, credibility and reliability."""

    def __init__(self, researcher: "GPTResearcher"):
        self.researcher = researcher

    async def curate_sources(
        self,
        source_data: List,
        max_results: int = 10,
    ) -> List:
        """
        Rank sources based on research data and guidelines.
        
        Args:
            query: The research query/task
            source_data: List of source documents to rank
            max_results: Maximum number of top sources to return
            
        Returns:
            str: Ranked list of source URLs with reasoning
        """
        print(f"\n\nCurating {len(source_data)} sources: {source_data}")
        if self.researcher.verbose:
            await stream_output(
                "logs",
                "research_plan",
                f"⚖️ Evaluating and curating sources by credibility and relevance...",
                self.researcher.websocket,
            )
        
        smart_model = max(self.researcher.cfg.chat_models, key=lambda x: x.model_size)

        response = ""
        try:
            response = await create_chat_completion(
                llm_provider=smart_model.provider,
                model=smart_model.model,
                base_url=smart_model.base_url,
                api_key=smart_model.api_key,
                messages=[
                    {"role": "system", "content": f"{self.researcher.role}"},
                    {"role": "user", "content": rank_sources_prompt(
                        self.researcher.query, source_data, max_results)},
                ],
                temperature=0.2,
                max_tokens=8000,
                llm_kwargs=smart_model.llm_kwargs,
                cost_callback=self.researcher.add_costs,
            )

            curated_sources = json.loads(response)
            print(f"\n\nFinal Curated sources {len(source_data)} sources: {curated_sources}")

            if self.researcher.verbose:
                await stream_output(
                    "logs",
                    "research_plan",
                    f"🏅 Verified and ranked top {len(curated_sources)} most reliable sources",
                    self.researcher.websocket,
                )

            return curated_sources

        except Exception as e:
            print(f"Error in curate_sources from LLM response: {response}")
            if self.researcher.verbose:
                await stream_output(
                    "logs", 
                    "research_plan",
                    f"🚫 Source verification failed: {str(e)}",
                    self.researcher.websocket,
                )
            return source_data
