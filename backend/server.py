import json
from flask import Flask, request, Response, jsonify, redirect, render_template
import pandas as pd
from time import time
from flask_cors import CORS

app = Flask(__name__)
CORS(app)

# for demo purposes only
data = pd.DataFrame(columns=['user_id', 'application_id', 'gallons', 'timestamp'])

frontend_URL = "https://nathanielbd.github.io/watered-down/"
@app.route("/", methods=['GET', 'POST'])
def landing():
    return redirect(frontend_URL) #render_template("index.html")

@app.route('/api', methods=['GET', 'POST'])
def serve():
    if request.is_json:
        info = request.get_json()
        info['timestamp'] = time()
        global data
        data = data.append(info, ignore_index=True)
        print(f'added {info}')
        return redirect(frontend_URL)

@app.route('/api/record/')
def record():
    info = request.args.to_dict(flat=True)
    info['timestamp'] = time()
    global data
    data = data.append(info, ignore_index=True)
    print(f'added {info}')
    return redirect(frontend_URL)

@app.route('/api/record/<user_id>/<application_id>/<gallons>/')
def record_route(user_id, application_id, gallons):
    timestamp = time()
    info = {'user_id': user_id,
                        'application_id': application_id,
                        'gallons': gallons,
                        'timestamp': timestamp}
    global data
    data = data.append(info, ignore_index=True)
    print(f'added {info}')
    return redirect(frontend_URL)

@app.route('/api/user/<user>')
def user_serve(user):
    subset = data[data['user_id']==user]
    return subset.to_json(orient='records')

@app.route('/api/application/<application_id>')
def application_serve(application_id):
    subset = data[data['application_id']==application_id]
    return subset.to_json(orient='records')

@app.route('/api/applications')
def applications():
    return data['application_id'].to_json(orient='records')


if __name__ == '__main__':
    app.run(
        host='0.0.0.0',
        port=4000,
        debug=True
    )
