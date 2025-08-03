import os
import django
import sys

sys.path.append('/mnt/tempdisk/MedicalEquipment-Project/MedicalEquipment-Project/BackEnd/MEPBE')
os.environ.setdefault("DJANGO_SETTINGS_MODULE", "MEPBE.settings")
django.setup()

import csv
from Products.models import Product

existing_slugs = set(Product.objects.values_list("slug", flat=True))

def generate_unique_slug(base_slug, existing_slugs):
    counter = 1
    slug = f"{base_slug}-{counter}"
    while slug in existing_slugs:
        counter += 1
        slug = f"{base_slug}-{counter}"
    existing_slugs.add(slug)
    return slug

with open('/mnt/tempdisk/MedicalEquipment-Project/MedicalEquipment-Project/BackEnd/MEPBE/Products/media/details.csv', newline="", encoding="utf-8") as csvfile:
    reader = csv.DictReader(csvfile)
    products = []

    base_slug = "product"

    for row in reader:
        title = row["title"].strip()

        unique_slug = generate_unique_slug(base_slug, existing_slugs)

        products.append(Product(
            title=title,
            description=row["description"],
            image=row["image"],
            slug=unique_slug
        ))

    Product.objects.bulk_create(products)