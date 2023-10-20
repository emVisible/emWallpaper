import asyncio
import re
import random

from orjson import dumps
from sanic.response import json, text
from sanic_cors import CORS, cross_origin
from scrapy import cmdline
from scrapy.crawler import CrawlerProcess
from scrapy.utils.project import get_project_settings
from sanic import Blueprint, Sanic

running_tasks = set()
app = Sanic(__name__)
api = Blueprint("emWallpaper", url_prefix="/api")
app.blueprint(api)
cors = CORS(app, resources={r"/api/*": {"origins": "*"}})


@api.route("/", methods=["GET", "OPTIONS"])
async def list_users(request):
    return text("user example")


@api.route("/all", methods=["GET", "POST"])
async def list_urls(request):
    url_list = []
    with open("./data/paths.txt", "r") as f:
        urls = f.readlines()
        print(len(urls))
        begin = random.randint(1, len(urls)-30)
        urls = urls[begin:begin+30]
        for url in urls:
            # yield await get(url)
            file_name = re.findall(r"\w{6}\.\w{2}g", url)[0]
            url = re.findall(r"https.+\.\w{2}g", url)[0]
            url_list.append({"url": url, "name": file_name})
    print(url_list)
    return json(url_list, dumps=dumps)



async def crawl():
    print("⭐⭐⭐⭐⭐⭐Start")
    crawler = CrawlerProcess(get_project_settings())
    try:
        crawler.crawl("wallpaper")
        crawler.start()
    except Exception as e:
        print(f"An error occurred during crawling: {e}")

@api.route("/crawl", methods=["POST"])
async def update_data(request):
    try:
        # app.add_task(await crawl(), name="wallpaper")
        task = asyncio.create_task(crawl())
        running_tasks.add(task)
        task.add_done_callback(lambda e:running_tasks.remove(e))

    except:
        print("wrong------------------------")
    return text("Crawling started")
