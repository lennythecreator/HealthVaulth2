from pymongo.mongo_client import MongoClient

URI = "mongodb+srv://LEO:Lenny@cluster0.xm8ex7e.mongodb.net/?retryWrites=true&w=majority&appName=Cluster0"

Client = MongoClient(URI)

main = Client.main

User = main.User

Task = main.Task


