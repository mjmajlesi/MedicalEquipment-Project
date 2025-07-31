from rest_framework import serializers
from .models import Product

class ProductsdetailsSerializer(serializers.ModelSerializer):
    image = serializers.ImageField(use_url=True)

    class Meta:
        model = Product
        fields = ["title", "image", "description"]