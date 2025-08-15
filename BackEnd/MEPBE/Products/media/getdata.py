import os
import sys
import django

sys.path.append('/mnt/tempdisk/MedicalEquipment-Project/BackEnd/MEPBE')

os.environ["DATABASE_URL"] = "postgresql://medicalequipment_admin:fIYXdGAIhlBiswtG3SAPIgyk99IWO3a4@dpg-d2d4mhs9c44c73c0gto0-a.frankfurt-postgres.render.com/medicalequipment_db"
os.environ.setdefault("DJANGO_SETTINGS_MODULE", "MEPBE.settings")

django.setup()

import csv
from django.conf import settings
from Products.models import Product

CSV_PATH = "/mnt/tempdisk/MedicalEquipment-Project/BackEnd/MEPBE/Products/media/details.csv"

def main():
    print("Using database:", settings.DATABASES['default'])

    deleted_count, _ = Product.objects.all().delete()
    print(f"Deleted {deleted_count} old products.")

    added = 0
    with open(CSV_PATH, newline="", encoding="utf-8") as csvfile:
        reader = csv.DictReader(csvfile)

        for index, row in enumerate(reader, start=1):
            title = (row.get("title") or "").strip()
            if not title:
                print(f"Skipping row {index} - empty title.")
                continue

            description = row.get("description") or ""
            image_filename = (row.get("image") or "").strip()
            image_filename = os.path.basename(image_filename)
            image_path = f"images/{image_filename}" if image_filename else None

            slug = f"product-{index}"

            try:
                product = Product.objects.create(
                    title=title,
                    description=description,
                    image=image_path,
                    slug=slug
                )
                added += 1
                print(f"Added: {product.title} (slug: {product.slug})")
            except Exception as e:
                print(f"Error adding '{title}': {e}")

    print(f"Total added products: {added}")

if __name__ == "__main__":
    main()