import arxiv
from typing import Literal, Optional


class ArxivSearch:
    """
    Arxiv API Retriever
    """

    def __init__(self):
        pass

    def search(
        self,
        query: str,
        sort: Literal["Relevance", "SubmittedDate"] = "Relevance",
        query_domains: Optional[str] = None,
        max_results=5,
    ):
        """
        Performs the search
        :param query:
        :param max_results:
        :return:
        """
        assert sort in ["Relevance", "SubmittedDate"], "Invalid sort criterion"
        sort_criterion = (
            arxiv.SortCriterion.SubmittedDate
            if sort == "SubmittedDate"
            else arxiv.SortCriterion.Relevance
        )

        arxiv_gen = list(
            arxiv.Client().results(
                arxiv.Search(
                    query=query,  # +
                    max_results=max_results,
                    sort_by=sort_criterion,
                )
            )
        )

        search_result = []

        for result in arxiv_gen:

            search_result.append(
                {
                    "title": result.title,
                    "href": result.pdf_url,
                    "body": result.summary,
                }
            )

        return search_result
