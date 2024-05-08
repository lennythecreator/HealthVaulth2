from DB import Task

Task.insert_one({"task_name":"Run 1 mile"})
def get_task_by_name(task_name):
    task = Task.find_one({"task_name":task_name})
    return task["_id"]
