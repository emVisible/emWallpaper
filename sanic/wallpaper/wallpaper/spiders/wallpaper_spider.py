from pathlib import Path

import scrapy
import random
import time


class WallpaperSpider(scrapy.Spider):
    name = "wallpaper"
    sleep_time = 1
    batch_size = 10

    def _sleep(self) -> None:
        time.sleep(self.sleep_time)

    def random_url(self) -> str:
        base_url = "https://wallhaven.cc/random?seed=OVYwXw&page="
        page_num = random.randint(1, 1000).__str__()
        base_url = base_url + page_num
        return base_url

    def start_requests(self):
        urls = [self.random_url() for i in range(self.batch_size)]
        for url in urls:
            """
              对应的是 GET https://wallhaven.cc/random?seed=OVYwXw&page=479> (referer: None)
            """
            yield scrapy.Request(url=url, callback=self.parse)

    def handle_layer_one(self, response):
        urls = response.xpath("//main//img/@src").getall()
        for url in urls:
            self._sleep()
            print("##################")
            print(url)
            print("##################")
            yield {"url": url}

    def parse(self, response):
        urls = response.xpath(
            '//*[@id="thumbs"]/section[1]/ul/li/figure/a/@href'
        ).getall()
        for url in urls:
            self._sleep()
            print("&&&&&&&&&&&&&&&&&&")
            print(url)
            print("&&&&&&&&&&&&&&&&&&")
            yield response.follow(url, self.handle_layer_one)