from rest_framework import status
from rest_framework.decorators import api_view, permission_classes
from rest_framework.permissions import AllowAny
from rest_framework.response import Response
from django.shortcuts import get_object_or_404

from Productsـdetails.models import Product
from Productsـdetails.serializers import ProductsdetailsSerializer

@api_view(['GET'])
@permission_classes([AllowAny])
def products_detail_page(request, id):
    product = get_object_or_404(Product, id=id)
    serializer = ProductsdetailsSerializer(product)
    return Response(serializer.data, status=status.HTTP_200_OK)