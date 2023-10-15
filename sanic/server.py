from sanic import Sanic
from sanic.response import text, json
from sanic_cors import CORS, cross_origin
from requests import get
from orjson import dumps

app = Sanic(__name__)
cors = CORS(app, resources={r"/api/*": {"origins": "*"}})

@app.route("/api", methods=['GET', 'OPTIONS'])
def list_users(request):
  return text("user example")

@app.route("/api/all", methods=['GET', 'POST'])
def list_urls(request):
  url_list = []
  with open("./wallpaper/wallpaper/data/paths.txt", "r")as f:
    urls = f.readlines()
    for url in urls:
      # yield await get(url)
      url_list.append(url)
  return json(url_list, dumps=dumps)