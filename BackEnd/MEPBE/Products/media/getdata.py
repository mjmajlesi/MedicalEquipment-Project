import os
import sys
import django

sys.path.append('/mnt/tempdisk/MedicalEquipment-Project/BackEnd/MEPBE')
os.environ.setdefault("DJANGO_SETTINGS_MODULE", "MEPBE.settings")
django.setup()

import csv
from django.db import transaction
from django.utils.text import slugify
from Products.models import Product


def make_base_slug(title: str) -> str:
    base = slugify(title or "", allow_unicode=True).strip("-")
    return base or "product"


def generate_unique_slug(base_slug: str, existing_slugs: set) -> str:
    slug = base_slug
    counter = 1
    while slug in existing_slugs:
        slug = f"{base_slug}-{counter}"
        counter += 1
    existing_slugs.add(slug)
    return slug


CSV_PATH = "/mnt/tempdisk/MedicalEquipment-Project/BackEnd/MEPBE/Products/media/details.csv"

def main():
    existing_slugs = set(
        s for s in Product.objects.values_list("slug", flat=True)
        if s  
    )

    products_to_create = []

    with open(CSV_PATH, newline="", encoding="utf-8") as csvfile:
        reader = csv.DictReader(csvfile)

        for row in reader:
            title = (row.get("title") or "").strip()
            description = row.get("description") or ""
            image_filename = (row.get("image") or "").strip()

            base_slug = make_base_slug(title)

            unique_slug = generate_unique_slug(base_slug, existing_slugs)

            image_filename = os.path.basename(image_filename)
            image_path = f"images/{image_filename}" if image_filename else ""

            products_to_create.append(Product(
                title=title,
                description=description,
                image=image_path,
                slug=unique_slug
            ))

    with transaction.atomic():
        Product.objects.bulk_create(products_to_create)

    print(f"Done. Created {len(products_to_create)} products.")


if __name__ == "__main__":
    main()