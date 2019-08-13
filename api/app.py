from flask import Flask, jsonify
import sqlite3

# Trying to use Flask to create an api for all the schedule data to be read from 
# Having trouble figuring out what to do, since I just want to write data to the api and not display it here
# I dont really know how Flask and Python and API's and Databases work...
app = Flask(__name__)

@app.route('/')
def schedule():
    dict = {}

    connection = sqlite3.connect('../breathe.db')
    cur = connection.cursor()