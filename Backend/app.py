from flask import Flask,request,jsonify
from flask_cors import CORS
from flask_jwt_extended import create_access_token,JWTManager,jwt_required,get_jwt_identity
from user import *
from login import *


app = Flask(__name__)
app.config["SECERT_KEY"] = "hello"
CORS(app)
jwt=JWTManager(app)
app.config['JWT_SECRET_KEY'] = 'your_jwt_secret_key_here'

@app.route("/login",methods=["POST"])
def login():

    data = request.json
    username = data.get("userName")
    password = data.get("password")
    print(username,password)
    user_id,status = create_token(username,password)
    if status != 200:
        return jsonify(error=user_id)
    else:
        access_token = create_access_token(identity=user_id)
        return jsonify(access_token=access_token)

    
@app.route("/signup", methods =["POST"])
def signUp():
    data = request.json
    name = data.get("name")
    username = data.get("userName")
    password = data.get("password")
    age = data.get("age")
    weight = data.get("weight")
    height = data.get("height")
    goals = data.get("goals")
    print(name,username,age)
    return access(username,name,password,weight,height,age,goals)

@app.route("/addgoal", methods =["POST"])
@jwt_required()
def add_daily():
    
    data = request.json
    goal = data.get("goal")
    user_id = get_jwt_identity()
    print(user_id)
    # add_fit_goal(user_id,goal)
    # return jsonify({"message":"successful!"})




if __name__ == "__main__":
    app.run(debug=True)
