from django.db import models

class Product(models.Model):
    title = models.CharField(max_length=255, unique=True)
    image = models.ImageField(upload_to='products/images/', blank=True, null=True)
    description = models.TextField(blank=True)
    created_at = models.DateTimeField(auto_now_add=True)
    updated_at = models.DateTimeField(auto_now=True)

    class Meta:
        verbose_name = "product"
        verbose_name_plural = "products"

    def __str__(self):
        return self.title