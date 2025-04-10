from fastapi import WebSocket
from typing import Any, List

from gpt_researcher import GPTResearcher


class BasicReport:
    def __init__(
        self,
        query: str,
        query_domains: List[str],
        report_type: str,
        report_source: str,
        source_urls,
        document_urls,
        tone: Any,
        output_language: str,
        config_path: str,
        websocket: WebSocket,
        headers=None
    ):
        self.query = query
        self.query_domains = query_domains
        self.report_type = report_type
        self.report_source = report_source
        self.source_urls = source_urls
        self.document_urls = document_urls
        self.tone = tone
        self.output_language = output_language
        self.config_path = config_path
        self.websocket = websocket
        self.headers = headers or {}

        # Initialize researcher
        self.gpt_researcher = GPTResearcher(
            query=self.query,
            query_domains=self.query_domains,
            report_type=self.report_type,
            report_source=self.report_source,
            source_urls=self.source_urls,
            document_urls=self.document_urls,
            tone=self.tone,
            output_language=self.output_language,
            config_path=self.config_path,
            websocket=self.websocket,
            headers=self.headers
        )

    async def run(self):
        await self.gpt_researcher.conduct_research()
        report = await self.gpt_researcher.write_report()
        return report
