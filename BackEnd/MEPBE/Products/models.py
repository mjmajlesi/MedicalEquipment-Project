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
        self.slug = self.title.replace(" ", "-")

    super().save(*args, **kwargs)