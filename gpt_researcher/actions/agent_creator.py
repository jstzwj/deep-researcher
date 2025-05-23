import json
import re
import json_repair
import openai
from ..utils.llm import create_chat_completion
from ..prompts import auto_agent_instructions
from ..config import Config

async def choose_agent(
    query: str, cfg: Config, parent_query=None, cost_callback: callable = None, headers=None
):
    """
    Chooses the agent automatically
    Args:
        parent_query: In some cases the research is conducted on a subtopic from the main query.
            The parent query allows the agent to know the main context for better reasoning.
        query: original query
        cfg: Config
        cost_callback: callback for calculating llm costs

    Returns:
        agent: Agent name
        agent_role_prompt: Agent role prompt
    """
    query = f"{parent_query} - {query}" if parent_query else f"{query}"
    response = None  # Initialize response to ensure it's defined
    
    models = cfg.chat_models
    # Select model with max size
    smart_model = max(models, key=lambda x: x.model_size)
    
    try:
        response = await create_chat_completion(
            llm_provider=smart_model.provider,
            model=smart_model.model,
            base_url=smart_model.base_url,
            api_key=smart_model.api_key,
            messages=[
                {"role": "system", "content": f"{auto_agent_instructions()}"},
                {"role": "user", "content": f"task: {query}"},
            ],
            temperature=0.15,
            llm_kwargs=smart_model.llm_kwargs,
            cost_callback=cost_callback,
        )

        agent_dict = json.loads(response)
        return agent_dict["server"], agent_dict["agent_role_prompt"]
    except openai.APIConnectionError:
        return "Default Agent", (
            "You are an AI critical thinker research assistant. Your sole purpose is to write well written, "
            "critically acclaimed, objective and structured reports on given text."
        )
    except Exception as e:
        if response is None:
            return "Default Agent", (
                "You are an AI critical thinker research assistant. Your sole purpose is to write well written, "
                "critically acclaimed, objective and structured reports on given text."
            )
        else:
            return await handle_json_error(response)

async def handle_json_error(response: str):
    try:
        agent_dict = json_repair.loads(response)
        if agent_dict.get("server") and agent_dict.get("agent_role_prompt"):
            return agent_dict["server"], agent_dict["agent_role_prompt"]
    except Exception as e:
        print(f"⚠️ Error in reading JSON and failed to repair with json_repair: {e}")
        print(f"⚠️ LLM Response: `{response}`")

    json_string = extract_json_with_regex(response)
    if json_string:
        try:
            json_data = json.loads(json_string)
            return json_data["server"], json_data["agent_role_prompt"]
        except json.JSONDecodeError as e:
            print(f"Error decoding JSON: {e}")

    print("No JSON found in the string. Falling back to Default Agent.")
    return "Default Agent", (
        "You are an AI critical thinker research assistant. Your sole purpose is to write well written, "
        "critically acclaimed, objective and structured reports on given text."
    )


def extract_json_with_regex(response):
    json_match = re.search(r"{.*?}", response, re.DOTALL)
    if json_match:
        return json_match.group(0)
    return None
