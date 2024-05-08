from DB import *

def get_user_by_id(id):
    pass
def add_task_to_user(task_id,user_id):
    return User.update_one({"_id":user_id},{"$push":{"task_id":task_id}})

def add_fit_goal(user_id,goal):
    return User.update_one({"_id":user_id},{"$push":{"fitness_goals":goal}})

