import json
import os
import warnings
from typing import Dict, Any, List, Union, Type, get_origin, get_args
# from gpt_researcher.actions import retriever
from pydantic import BaseModel
from .variables.default import DEFAULT_CONFIG
from .variables.base import BaseConfig
from ..retrievers.utils import get_all_retriever_names


class RetrieverConfig(BaseModel):
    provider: str
    api_key: str

class EmbeddingConfig(BaseModel):
    provider: str
    model: str
    api_key: str
    base_url: str
    model_size: int = 1
    max_length: int = 4096
    embedding_kwargs: dict = {}

class ChatModelConfig(BaseModel):
    provider: str
    model: str
    api_key: str
    base_url: str
    model_size: int = 1
    max_length: int = 4096
    llm_kwargs: dict = {}

class Config(BaseModel):
    retrievers: List[RetrieverConfig]
    embeddings: List[EmbeddingConfig]
    chat_models: List[ChatModelConfig]
    similarity_threshold: float = 0.42
    fast_token_limit: int = 2000
    smart_token_limit: int = 4000
    strategic_token_limit: int = 4000
    browse_chunk_max_length: int = 8192
    curate_sources: bool = False
    summary_token_limit: int = 700
    temperature: float = 0.4
    user_agent: str = "Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/119.0.0.0 Safari/537.36 Edg/119.0.0.0"
    max_search_results_per_query: int = 5
    memory_backend: str = "local"
    total_words: int = 1200
    report_format: str = "APA"
    max_iterations: int = 3
    agent_role: str | None = None
    scraper: str = "bs"
    max_scraper_workers: int = 15
    max_subtopics: int = 3
    language: str = "english"
    report_source: str = "web"
    doc_path: str = "./my-docs"
    # Deep research specific settings
    deep_research_breadth: int = 3
    deep_research_depth: int = 2
    deep_research_concurrency: int = 4