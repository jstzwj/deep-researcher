import pika
import json
import time
from pika.adapters.blocking_connection import BlockingChannel

RABBITMQ_HOST = "localhost"
TASK_QUEUE = "task_queue"
PROGRESS_QUEUE = "progress_queue"

def update_progress(task_id: str, progress: int, status: str):
    connection = pika.BlockingConnection(pika.ConnectionParameters(RABBITMQ_HOST))
    channel = connection.channel()
    channel.queue_declare(queue=PROGRESS_QUEUE, durable=True)
    
    message = json.dumps({
        "task_id": task_id,
        "progress": progress,
        "status": status
    })
    
    channel.basic_publish(
        exchange="",
        routing_key=PROGRESS_QUEUE,
        body=message,
        properties={"delivery_mode": 2}
    )
    connection.close()

def process_task(task_id: str):
    # 模拟长时间任务
    for i in range(1, 11):
        time.sleep(2)  # 模拟耗时操作
        progress = i * 10
        update_progress(task_id, progress, "running")
        print(f"Task {task_id} progress: {progress}%")
    
    update_progress(task_id, 100, "completed")

def on_message_received(ch: BlockingChannel, method, properties, body):
    task_data = json.loads(body)
    task_id = task_data["task_id"]
    print(f"Received task: {task_id}")
    
    try:
        process_task(task_id)
        ch.basic_ack(delivery_tag=method.delivery_tag)
    except Exception as e:
        print(f"Task {task_id} failed: {str(e)}")
        update_progress(task_id, 0, "failed")
        ch.basic_nack(delivery_tag=method.delivery_tag)

def start_worker():
    connection = pika.BlockingConnection(pika.ConnectionParameters(RABBITMQ_HOST))
    channel = connection.channel()
    
    channel.queue_declare(queue=TASK_QUEUE, durable=True)
    channel.basic_qos(prefetch_count=1)  # 一次只处理一个任务
    channel.basic_consume(queue=TASK_QUEUE, on_message_callback=on_message_received)
    
    print("Worker started. Waiting for tasks...")
    channel.start_consuming()

if __name__ == "__main__":
    start_worker()