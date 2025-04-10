from ..config.config import Config, RetrieverConfig

def get_retriever(retriever_config: RetrieverConfig):
    """
    Gets the retriever
    Args:
        retriever (str): retriever name

    Returns:
        retriever: Retriever class

    """
    match retriever_config.provider:
        case "google":
            from gpt_researcher.retrievers import GoogleSearch

            return GoogleSearch()
        case "searx":
            from gpt_researcher.retrievers import SearxSearch

            return SearxSearch()
        case "searchapi":
            from gpt_researcher.retrievers import SearchApiSearch

            return SearchApiSearch()
        case "serpapi":
            from gpt_researcher.retrievers import SerpApiSearch

            return SerpApiSearch()
        case "serper":
            from gpt_researcher.retrievers import SerperSearch

            return SerperSearch()
        case "duckduckgo":
            from gpt_researcher.retrievers import Duckduckgo

            return Duckduckgo()
        case "bing":
            from gpt_researcher.retrievers import BingSearch

            return BingSearch()
        case "arxiv":
            from gpt_researcher.retrievers import ArxivSearch

            return ArxivSearch()
        case "tavily":
            from gpt_researcher.retrievers import TavilySearch

            return TavilySearch(api_key=retriever_config.api_key)
        case "exa":
            from gpt_researcher.retrievers import ExaSearch

            return ExaSearch()
        case "semantic_scholar":
            from gpt_researcher.retrievers import SemanticScholarSearch

            return SemanticScholarSearch()
        case "pubmed_central":
            from gpt_researcher.retrievers import PubMedCentralSearch

            return PubMedCentralSearch()
        case "custom":
            from gpt_researcher.retrievers import CustomRetriever

            return CustomRetriever()

        case _:
            return None


def get_retrievers(headers: dict[str, str], cfg: Config):
    """
    Determine which retriever(s) to use based on headers, config, or default.

    Args:
        headers (dict): The headers dictionary
        cfg (Config): The configuration object

    Returns:
        list: A list of retriever classes to be used for searching.
    """
    # Check headers first for multiple retrievers
    if cfg.retrievers:
        retriever_configs = cfg.retrievers
    # If still not set, use default retriever
    else:
        retriever_configs = [get_default_retriever()]

    # Convert retriever names to actual retriever classes
    # Use get_default_retriever() as a fallback for any invalid retriever names
    return [get_retriever(cfg) for cfg in retriever_configs]
