import os
import django
import sys

sys.path.append('/mnt/tempdisk/MedicalEquipment-Project/MedicalEquipment-Project/BackEnd/MEPBE')
os.environ.setdefault("DJANGO_SETTINGS_MODULE", "MEPBE.settings")
django.setup()


import csv
from Productsـdetails.models import Product

with open('/mnt/tempdisk/MedicalEquipment-Project/MedicalEquipment-Project/BackEnd/MEPBE/Productsـdetails/media/details.csv', newline="", encoding="utf-8") as csvfile:
    reader = csv.DictReader(csvfile)
    products = []
    for row in reader:
        products.append(Product(
            title = row["title"],
            description = row["description"],
            image = row["image"]
        ))
    Product.objects.bulk_create(products)