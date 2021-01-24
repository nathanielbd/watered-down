import json
from flask import Flask, request, Response, jsonify, redirect, render_template
import pandas as pd
from time import time
from flask_cors import CORS

app = Flask(__name__)
CORS(app)

# for demo purposes only
data = pd.DataFrame(columns=['user_id', 'application_id', 'gallons', 'timestamp'])

@app.route("/", methods=['GET', 'POST'])
def landing():
    return render_template("index.html")

@app.route('/api', methods=['GET', 'POST'])
def serve():
    if request.is_json:
        info = request.get_json()
        info['timestamp'] = time()
        global data
        data = data.append(info, ignore_index=True)
        print(f'added {info}')
        return redirect('/2')

@app.route('/api/user/<user>')
def user_serve(user):
    subset = data[data['user_id']==user]
    return subset.to_json(orient='records')

if __name__ == '__main__':
    app.run(
        host='0.0.0.0',
        port=4000,
        debug=True
    )
