import datetime
import io
import json
import os

from flask import Flask, render_template
app = Flask(__name__)


@app.route('/')
def index():
    age = int((datetime.date.today() - datetime.date(1995, 4, 22)).days / 365)
    return render_template('home.html', age=age)

@app.route('/resume')
def resume():
    return get_static_file('static/resume.pdf')

@app.errorhandler(404)
def page_not_found(e):
    return render_template('404.html'), 404


def get_static_file(path):
    site_root = os.path.realpath(os.path.dirname(__file__))
    return os.path.join(site_root, path)


if __name__ == "__main__":
    print("running py app")
    app.run(host="0.0.0.0", port=8000, debug=True)
