from django.db import models

class Product(models.Model):
    title = models.CharField(max_length=255, unique=True)
    slug = models.SlugField(unique=True, blank=True)
    image = models.ImageField(upload_to='images/', blank=True, null=True)
    description = models.TextField(blank=True)
    created_at = models.DateTimeField(auto_now_add=True)
    updated_at = models.DateTimeField(auto_now=True)

    def save(self, *args, **kwargs):
        if not self.slug:
            last_product = Product.objects.filter(slug__startswith="product-").order_by("-slug").first()
            if last_product:
                try:
                    last_number = int(last_product.slug.split("-")[1])
                except (IndexError, ValueError):
                    last_number = 0
            else:
                last_number = 0

            self.slug = f"product-{last_number + 1}"

        super().save(*args, **kwargs)

    def __str__(self):
        return self.title