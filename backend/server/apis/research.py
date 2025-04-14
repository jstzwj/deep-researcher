import os
import uuid
import datetime
from typing import Optional, List, Tuple, Dict

from fastapi import APIRouter, Depends, HTTPException, status
from pydantic import BaseModel
from pika import BlockingConnection, ConnectionParameters

from .auth import get_current_user, oauth2_scheme
from ..model import User, Research, Report, ResearchLog, create_tables

router = APIRouter(prefix="/api/research", tags=["research"])

# 环境变量配置
RESEARCH_TIMEOUT = int(os.getenv("RESEARCH_TIMEOUT", 300))  # 默认5分钟超时
MAX_TOPIC_LENGTH = int(os.getenv("MAX_TOPIC_LENGTH", 1000))
MAX_DOMAINS_LENGTH = int(os.getenv("MAX_DOMAINS_LENGTH", 500))
# RabbitMQ 连接配置
RABBITMQ_HOST = str(os.getenv("RABBITMQ_HOST", "localhost"))
TASK_QUEUE = str(os.getenv("TASK_QUEUE", "task_queue"))
PROGRESS_QUEUE = str(os.getenv("PROGRESS_QUEUE", "progress_queue"))

# 验证配置
VALID_REPORT_TYPES = ["research_report", "detailed_report", "resource_report"]
VALID_SOURCES = ["web", "local", "hybrid", "deep", "azure"]
VALID_LANGUAGES = [
    "english", "simplified-chinese", "traditional-chinese",
    "japanese", "korean", "spanish", "french"
]
VALID_TONES = [
    "Objective", "Formal", "Analytical", "Persuasive", "Informative",
    "Explanatory", "Descriptive", "Critical", "Comparative",
    "Speculative", "Reflective", "Narrative", "Humorous",
    "Optimistic", "Pessimistic"
]

def get_rabbitmq_connection():
    return BlockingConnection(ConnectionParameters(RABBITMQ_HOST))

class ResearchRequest(BaseModel):
    topic: str
    report_type: str
    tone: str
    source: str
    domains: Optional[str] = None
    language: str

class ResearchResponse(BaseModel):
    status: str
    report_id: str
    estimated_time: int
    status_url: str

class ResearchStatusResponse(BaseModel):
    status: str  # "processing", "completed", "failed"
    progress: int  # 0-100
    report_url: Optional[str] = None
    error: Optional[str] = None

class ReportResponse(BaseModel):
    title: str
    content: str
    sources: list
    generated_at: datetime.datetime
    metadata: dict

class ResearchLogItem(BaseModel):
    id: str
    action: str
    details: Optional[str] = None
    created_at: datetime.datetime

class ResearchLogsResponse(BaseModel):
    research_id: str
    task: str
    logs: List[ResearchLogItem]

@router.post("/start_research", response_model=ResearchResponse)
async def start_research(
    request: ResearchRequest,
    current_user: User = Depends(get_current_user)
):
    # 验证输入
    if not request.topic.strip():
        raise HTTPException(
            status_code=status.HTTP_400_BAD_REQUEST,
            detail="Research topic cannot be empty"
        )
    
    if len(request.topic) > MAX_TOPIC_LENGTH:
        raise HTTPException(
            status_code=status.HTTP_400_BAD_REQUEST,
            detail=f"Research topic too long (max {MAX_TOPIC_LENGTH} characters)"
        )
    
    if request.report_type not in VALID_REPORT_TYPES:
        raise HTTPException(
            status_code=status.HTTP_400_BAD_REQUEST,
            detail="Invalid report type"
        )
    
    if request.tone not in VALID_TONES:
        raise HTTPException(
            status_code=status.HTTP_400_BAD_REQUEST,
            detail="Invalid tone"
        )
    
    if request.source not in VALID_SOURCES:
        raise HTTPException(
            status_code=status.HTTP_400_BAD_REQUEST,
            detail="Invalid source"
        )
    
    if request.language not in VALID_LANGUAGES:
        raise HTTPException(
            status_code=status.HTTP_400_BAD_REQUEST,
            detail="Invalid language"
        )
    
    if request.domains and len(request.domains) > MAX_DOMAINS_LENGTH:
        raise HTTPException(
            status_code=status.HTTP_400_BAD_REQUEST,
            detail=f"Domains list too long (max {MAX_DOMAINS_LENGTH} characters)"
        )
    
    # 创建研究记录
    research_id = str(uuid.uuid4())
    report_id = str(uuid.uuid4())
    
    try:
        # 保存到数据库
        research = Research.create(
            id=research_id,
            user=current_user,
            task=request.topic,
            report_type=request.report_type,
            report_source=request.source
        )
        
        report = Report.create(
            id=report_id,
            research=research,
            user=current_user,
            task=request.topic,
            report_type=request.report_type,
            report_source=request.source,
            finished=False
        )
        
        # 记录日志
        ResearchLog.create(
            research=research,
            user=current_user,
            action="research_started",
            details=f"Research started with type: {request.report_type}, source: {request.source}"
        )
        
    except Exception as e:
        raise HTTPException(
            status_code=status.HTTP_500_INTERNAL_SERVER_ERROR,
            detail=f"Failed to create research: {str(e)}"
        )
    
    # 这里应该将任务放入队列异步处理
    # 实际实现中可以使用Celery、RQ等任务队列
    
    # 返回响应
    return {
        "status": "success",
        "report_id": report_id,
        "estimated_time": RESEARCH_TIMEOUT,
        "status_url": f"/api/research/status/{report_id}"
    }

@router.get("/status/{report_id}", response_model=ResearchStatusResponse)
async def get_research_status(
    report_id: str,
    current_user: User = Depends(get_current_user)
):
    """获取研究任务状态"""
    
    try:
        report = Report.get(Report.id == report_id, Report.user == current_user)
    except Report.DoesNotExist:
        raise HTTPException(
            status_code=status.HTTP_404_NOT_FOUND,
            detail="Report not found"
        )
    
    # 这里应该检查实际任务状态
    # 模拟实现
    status = "processing"
    progress = 50
    report_url = None
    
    if report.md_path:  # 假设如果md_path存在则表示完成
        status = "completed"
        progress = 100
        report_url = f"/api/report/{report_id}"
    
    return {
        "status": status,
        "progress": progress,
        "report_url": report_url if status == "completed" else None
    }

@router.get("/report/{report_id}", response_model=ReportResponse)
async def get_report(
    report_id: str,
    current_user: User = Depends(get_current_user)
):
    """获取研究报告内容"""
    
    try:
        report = Report.get(Report.id == report_id, Report.user == current_user)
    except Report.DoesNotExist:
        raise HTTPException(
            status_code=status.HTTP_404_NOT_FOUND,
            detail="Report not found"
        )
    
    # 检查报告是否完成
    if not report.md_path:
        raise HTTPException(
            status_code=status.HTTP_425_TOO_EARLY,
            detail="Report not ready yet"
        )
    
    # 这里应该从存储中读取实际报告内容
    # 模拟实现
    try:
        with open(report.md_path, "r", encoding="utf-8") as f:
            content = f.read()
    except FileNotFoundError:
        raise HTTPException(
            status_code=status.HTTP_404_NOT_FOUND,
            detail="Report content not found"
        )
    
    return {
        "title": f"Research Report: {report.task[:50]}...",
        "content": content,
        "sources": [
            {"title": "Sample Source 1", "url": "https://example.com/1", "summary": "Sample summary 1"},
            {"title": "Sample Source 2", "url": "https://example.com/2", "summary": "Sample summary 2"}
        ],
        "generated_at": report.created_at,
        "metadata": {
            "model": "gpt-4",
            "research_time": 120  # seconds
        }
    }


@router.get("/{research_id}/logs", response_model=ResearchLogsResponse)
async def get_research_logs(
    research_id: str,
    current_user: User = Depends(get_current_user)
):
    """获取特定研究任务的所有日志"""
    
    try:
        # 验证research是否存在且属于当前用户
        research = Research.get(
            (Research.id == research_id) & 
            (Research.user == current_user)
        )
    except Research.DoesNotExist:
        raise HTTPException(
            status_code=status.HTTP_404_NOT_FOUND,
            detail="Research not found or access denied"
        )
    
    # 获取所有相关日志并按时间排序
    query = ResearchLog.select().where(
        ResearchLog.research == research
    ).order_by(ResearchLog.created_at.desc())
    
    logs = [
        {
            "id": log.id,
            "action": log.action,
            "details": log.details,
            "created_at": log.created_at
        }
        for log in query
    ]
    
    return {
        "research_id": research.id,
        "task": research.task,
        "logs": logs
    }