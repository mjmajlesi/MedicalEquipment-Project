from rest_framework import generics, status
from rest_framework.decorators import api_view, permission_classes
from rest_framework.permissions import AllowAny
from rest_framework.response import Response
from Products.models import Product
from Products.serializers import ProductsdetailsSerializer

@api_view(['GET'])
@permission_classes([AllowAny])
def products_detail_list(request):
    products = Product.objects.all()
    serializer = ProductsdetailsSerializer(products, many=True)
    return Response(serializer.data, status=status.HTTP_200_OK)

@api_view(['GET'])
@permission_classes([AllowAny])
def products_detail_page(request, slug):
    try:
        product = Product.objects.get(slug=slug)
        serializer = ProductsdetailsSerializer(product)
        return Response(serializer.data, status=status.HTTP_200_OK)
    except Product.DoesNotExist:
        return Response({"error" : "Can't find product"}, status=status.HTTP_404_NOT_FOUND)