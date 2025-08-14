import os
import django
import sys

sys.path.append('/mnt/tempdisk/MedicalEquipment-Project/MedicalEquipment-Project/BackEnd/MEPBE')
os.environ.setdefault("DJANGO_SETTINGS_MODULE", "MEPBE.settings")
django.setup()

import csv
from Products.models import Product
from django.utils.text import slugify

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

    for row in reader:
        title = row["title"].strip()
        base_slug = slugify(title)
        unique_slug = generate_unique_slug(base_slug, existing_slugs)

        image_filename = row["image"].strip()  
        image_path = f"images/{image_filename}"  

        products.append(Product(
            title=title,
            description=row["description"],
            image=image_path,
            slug=unique_slug
        ))

    Product.objects.bulk_create(products)