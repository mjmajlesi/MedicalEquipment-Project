from rest_framework.decorators import api_view, permission_classes
from rest_framework.permissions import AllowAny
from rest_framework.response import Response
from rest_framework import status
from rest_framework_simplejwt.tokens import RefreshToken
from login.serializers import UserSerializer
from django.contrib.auth import authenticate, login


def get_tokens__for_user(user):
    refresh = RefreshToken.for_user(user)
    return {
        'refresh' : str(refresh),
        'access' : str(refresh.access_token)
    }


@api_view(['POST'])
@permission_classes([AllowAny])
def sign_up_page(request):
    serializer = UserSerializer(data=request.data)
    if serializer.is_valid():
        user = serializer.save()
        user.set_password(serializer.validated_data["password"])
        user.save()
        tokens = get_tokens__for_user(user)
        return Response({"message" : "User created and logged in successfully",
                         "token" : tokens["access"],
                         "refresh" : tokens["refresh"]
        }, status=status.HTTP_201_CREATED)
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
        tokens = get_tokens__for_user(user)
        return Response({
            "message" : "Login successful", 
            "token" : tokens["access"],
            "refresh" : tokens["refresh"]
        }, status=status.HTTP_200_OK)
    else:
        return Response({"error" : "انگار شما هنوز ثبت نام نکرده اید"}, status=status.HTTP_401_UNAUTHORIZED)