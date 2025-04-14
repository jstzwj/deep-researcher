import asyncio
async def long_running_task(task_id: str):
    for i in range(1, 11):
        await asyncio.sleep(1)  # 模拟耗时操作
        progress = i * 10
        tasks_progress[task_id] = {"progress": progress, "status": "running"}
        print(f"Task {task_id} progress: {progress}%")
    
    tasks_progress[task_id] = {"progress": 100, "status": "completed"}
