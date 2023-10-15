# Define your item pipelines here
#
# Don't forget to add your pipeline to the ITEM_PIPELINES setting
# See: https://docs.scrapy.org/en/latest/topics/item-pipeline.html


# useful for handling different item types with a single interface
from itemadapter import ItemAdapter
import json


class WallpaperPipeline:
    def open_spider(self, spider):
        self.json_file = open("./data/paths.txt", "a+", encoding="utf-8")

    def process_item(self, item, spider):
        # print("⭐⭐⭐")
        # print(f"{item}")
        # print("⭐⭐⭐")
        json.dump(item, self.json_file)
        self.json_file.write("\n")
        return item
    def close_spider(self, spider):
        self.json_file.close()
