from typing import Dict, List, Literal

import requests


class SemanticScholarSearch:
    """
    Semantic Scholar API Retriever
    """

    BASE_URL = "https://api.semanticscholar.org/graph/v1/paper/search"
    VALID_SORT_CRITERIA = ["relevance", "citationCount", "publicationDate"]

    def __init__(self):
        """
        Initialize the SemanticScholarSearch class with a query and sort criterion.
        """

    def search(
        self,
        query: str,
        sort: Literal["relevance", "citationCount", "publicationDate"] = "relevance",
        query_domains: List[str]=None,
        max_results: int = 20,
    ) -> List[Dict[str, str]]:
        """
        Perform the search on Semantic Scholar and return results.

        :param query: Search query string
        :param sort: Sort criterion ('relevance', 'citationCount', 'publicationDate')
        :param query_domains: List of domains to filter by
        :param max_results: Maximum number of results to retrieve
        :return: List of dictionaries containing title, href, and body of each paper
        """
        assert sort in self.VALID_SORT_CRITERIA, "Invalid sort criterion"
        self.sort = sort.lower()
        params = {
            "query": query,
            "limit": max_results,
            "fields": "title,abstract,url,venue,year,authors,isOpenAccess,openAccessPdf",
            "sort": self.sort,
        }

        try:
            response = requests.get(self.BASE_URL, params=params)
            response.raise_for_status()
        except requests.RequestException as e:
            print(f"An error occurred while accessing Semantic Scholar API: {e}")
            return []

        results = response.json().get("data", [])
        search_result = []

        for result in results:
            if result.get("isOpenAccess") and result.get("openAccessPdf"):
                search_result.append(
                    {
                        "title": result.get("title", "No Title"),
                        "href": result["openAccessPdf"].get("url", "No URL"),
                        "body": result.get("abstract", "Abstract not available"),
                    }
                )

        return search_result
