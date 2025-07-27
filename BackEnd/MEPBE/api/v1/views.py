from rest_framework.decorators import api_view, permission_classes
from rest_framework.permissions import AllowAny
from rest_framework.response import Response
from rest_framework import status
from login.serializers import UserSerializer
from django.contrib.auth import authenticate, login
from django.contrib.auth.hashers import make_password



@api_view(['POST'])
@permission_classes([AllowAny])
def sign_up_page(request):
    serializer = UserSerializer(data=request.data)
    if serializer.is_valid():
        password = serializer.validated_data.get("password")
        serializer.save(password=make_password(password))
        return Response({"message" : "User created successfully"}, status=status.HTTP_201_CREATED)
    else:
        return Response(serializer.errors, status=status.HTTP_400_BAD_REQUEST)
    

@api_view(['POST'])
@permission_classes([AllowAny])
def login_page(request):
    email = request.data.get("email")
    password = request.data.get("password")

    if not email:
        return Response({"error" : "Email and password are required"}, status=status.HTTP_400_BAD_REQUEST)
    
    user = authenticate(request, email=email, password=password)

    if user is not None:
        login(request, user)
        serializer = UserSerializer(user)
        return Response({"mesage" : "Login successful", "user" : serializer.data}, status=status.HTTP_200_OK)
    else:
        return Response({"error" : "Invalid credentials"}, status=status.HTTP_401_UNAUTHORIZED)