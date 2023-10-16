from sanic import Sanic
from sanic.response import text, json
from sanic_cors import CORS, cross_origin
from requests import get
from orjson import dumps
import re

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
    for url in urls[:30]:
      # yield await get(url)
      file_name = re.findall(r'\w{6}\.\w{2}g', url)[0]
      url = re.findall(r'https.+\.\w{2}g', url)[0]
      url_list.append({"url": url, "name": file_name})
  print(url_list)
  return json(url_list, dumps=dumps)