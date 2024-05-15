from pymongo.mongo_client import MongoClient

URI = "URI" #Had a mongoDB link here before but decided it wasn't safe to have on here

Client = MongoClient(URI)

main = Client.main

User = main.User

Task = main.Task


