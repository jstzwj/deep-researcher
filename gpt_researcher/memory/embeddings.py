import os
from typing import Any
from gpt_researcher.config.config import EmbeddingConfig

OPENAI_EMBEDDING_MODEL = os.environ.get(
    "OPENAI_EMBEDDING_MODEL", "text-embedding-3-small"
)

_SUPPORTED_PROVIDERS = {
    "openai",
    "azure_openai",
    "cohere",
    "google_vertexai",
    "google_genai",
    "fireworks",
    "ollama",
    "together",
    "mistralai",
    "huggingface",
    "nomic",
    "voyageai",
    "dashscope",
    "custom",
    "bedrock",
}


class Memory:
    def __init__(self, embedding_config: EmbeddingConfig):
        _embeddings = None
        match embedding_config.provider:
            case "custom":
                from langchain_openai import OpenAIEmbeddings

                _embeddings = OpenAIEmbeddings(
                    model=embedding_config.model,
                    openai_api_key=embedding_config.api_key,
                    openai_api_base=embedding_config.base_url,  # default for lmstudio
                    check_embedding_ctx_length=False,
                    **embedding_config.embedding_kwargs,
                )  # quick fix for lmstudio
            case "openai":
                from langchain_openai import OpenAIEmbeddings

                _embeddings = OpenAIEmbeddings(model=embedding_config.model, **embedding_config.embedding_kwargs)
            case "azure_openai":
                from langchain_openai import AzureOpenAIEmbeddings

                _embeddings = AzureOpenAIEmbeddings(
                    model=embedding_config.model,
                    azure_endpoint=embedding_config.base_url,
                    openai_api_key=embedding_config.api_key,
                    openai_api_version=embedding_config.embedding_kwargs.get("openai_api_version", None),
                    **embedding_config.embedding_kwargs,
                )
            case "cohere":
                from langchain_cohere import CohereEmbeddings

                _embeddings = CohereEmbeddings(model=embedding_config.model, **embedding_config.embedding_kwargs)
            case "google_vertexai":
                from langchain_google_vertexai import VertexAIEmbeddings

                _embeddings = VertexAIEmbeddings(model=embedding_config.model, **embedding_config.embedding_kwargs)
            case "google_genai":
                from langchain_google_genai import GoogleGenerativeAIEmbeddings

                _embeddings = GoogleGenerativeAIEmbeddings(
                    model=embedding_config.model, **embedding_config.embedding_kwargs
                )
            case "fireworks":
                from langchain_fireworks import FireworksEmbeddings

                _embeddings = FireworksEmbeddings(model=embedding_config.model, **embedding_config.embedding_kwargs)
            case "ollama":
                from langchain_ollama import OllamaEmbeddings

                _embeddings = OllamaEmbeddings(
                    model=embedding_config.model,
                    base_url=embedding_config.base_url,
                    **embedding_config.embedding_kwargs,
                )
            case "together":
                from langchain_together import TogetherEmbeddings

                _embeddings = TogetherEmbeddings(model=embedding_config.model, **embedding_config.embedding_kwargs)
            case "mistralai":
                from langchain_mistralai import MistralAIEmbeddings

                _embeddings = MistralAIEmbeddings(model=embedding_config.model, **embedding_config.embedding_kwargs)
            case "huggingface":
                from langchain_huggingface import HuggingFaceEmbeddings

                _embeddings = HuggingFaceEmbeddings(model_name=embedding_config.model, **embedding_config.embedding_kwargs)
            case "nomic":
                from langchain_nomic import NomicEmbeddings

                _embeddings = NomicEmbeddings(model=embedding_config.model, **embedding_config.embedding_kwargs)
            case "voyageai":
                from langchain_voyageai import VoyageAIEmbeddings

                _embeddings = VoyageAIEmbeddings(
                    voyage_api_key=embedding_config.api_key,
                    model=embedding_config.model,
                    **embedding_config.embedding_kwargs,
                )
            case "dashscope":
                from langchain_community.embeddings import DashScopeEmbeddings

                _embeddings = DashScopeEmbeddings(model=embedding_config.model, **embedding_config.embedding_kwargs)
            case "bedrock":
                from langchain_aws.embeddings import BedrockEmbeddings

                _embeddings = BedrockEmbeddings(model_id=embedding_config.model, **embedding_config.embedding_kwargs)
            case "siliconflow":
                from langchain_openai import OpenAIEmbeddings
                from langchain_openai import OpenAIEmbeddings

                _embeddings = OpenAIEmbeddings(
                    model=embedding_config.model,
                    openai_api_key=embedding_config.api_key,
                    openai_api_base=embedding_config.base_url,
                    check_embedding_ctx_length=False,
                    **embedding_config.embedding_kwargs,
                )
            case _:
                raise Exception("Embedding not found.")

        self._embeddings = _embeddings

    def get_embeddings(self):
        return self._embeddings
