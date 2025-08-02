from rest_framework import generics, status
from rest_framework.decorators import api_view, permission_classes
from rest_framework.permissions import AllowAny
from rest_framework.response import Response
from Productsـdetails.models import Product
from Productsـdetails.serializers import ProductsdetailsSerializer

@api_view(['GET'])
@permission_classes([AllowAny])
def products_detail_page(request):
    products = Product.objects.all()
    serializer = ProductsdetailsSerializer(products, many=True)
    return Response(serializer.data, status=status.HTTP_200_OK)