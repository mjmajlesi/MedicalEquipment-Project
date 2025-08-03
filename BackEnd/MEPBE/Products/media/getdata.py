import os
import django
import sys
from django.utils.text import slugify

sys.path.append('/mnt/tempdisk/MedicalEquipment-Project/MedicalEquipment-Project/BackEnd/MEPBE')
os.environ.setdefault("DJANGO_SETTINGS_MODULE", "MEPBE.settings")
django.setup()

import csv
from Products.models import Product

# خواندن slugهای موجود در دیتابیس
existing_slugs = set(Product.objects.values_list("slug", flat=True))

def generate_unique_slug(base_slug, existing_slugs):
    slug = base_slug
    counter = 1
    while slug in existing_slugs:
        slug = f"{base_slug}-{counter}"
        counter += 1
    existing_slugs.add(slug)
    return slug

with open('/mnt/tempdisk/MedicalEquipment-Project/MedicalEquipment-Project/BackEnd/MEPBE/Products/media/details.csv', newline="", encoding="utf-8") as csvfile:
    reader = csv.DictReader(csvfile)
    products = []

    for row in reader:
        title = row["title"].strip()
        base_slug = slugify(title)
        if not base_slug:
            base_slug = "product"

        unique_slug = generate_unique_slug(base_slug, existing_slugs)

        products.append(Product(
            title=title,
            description=row["description"],
            image=row["image"],
            slug=unique_slug
        ))

    Product.objects.bulk_create(products)
