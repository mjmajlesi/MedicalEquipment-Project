import os
import sys
import django
from pathlib import Path
import csv

# مسیر BackEnd را اضافه می‌کنیم:
sys.path.append('/home/okyrnzwj/MedicalEquipment-Project/BackEnd')

# تنظیمات Django
os.environ.setdefault("DJANGO_SETTINGS_MODULE", "MEPBE.settings")
django.setup()

from django.conf import settings
from Products.models import Product

# مسیر درست CSV داخل پروژه
CSV_PATH = Path(settings.BASE_DIR) / "Products" / "media" / "details.csv"

def main():
    print("Using CSV:", CSV_PATH)

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

            # مسیر صحیح public_html/media/images
            image_path = f"images/{image_filename}" if image_filename else None

            slug = f"product-{index}"

            try:
                Product.objects.create(
                    title=title,
                    description=description,
                    image=image_path,
                    slug=slug
                )
                added += 1
                print(f"Added: {title} (slug:{slug})")

            except Exception as e:
                print(f"Error adding '{title}': {e}")

    print(f"Total added products: {added}")


if __name__ == "__main__":
    main()
