from DB import User
def create_token(username,password):
    user = User.find_one({"username":username}) 
    if user:
        if password ==user["password"]:
            return str(user["_id"]),200
        else:
            return"invalid login",400
    else:
        return "error no user",400
    
def access(username,name,password,weight,height,age,goals):
    user = User.find_one({"username":username})
    if user:
        return {"error":"user exists"}
    else:
        User.insert_one({
            "name":name,
            "username":username,
            "weight":weight,
            "height": height,
            "password":password,
            "age":age,
            "goals":goals,
            "fitness_goals": [],
            "task":[]
            
        })

        return{"message":"user created successfully"}