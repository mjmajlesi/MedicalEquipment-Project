from django.urls import path
from .views import login_page, sign_up_page
from rest_framework_simplejwt.views import TokenRefreshView

urlpatterns = [
    path("sign_up/", sign_up_page, name="sign_up_page"),
    path("login/", login_page, name="login_page"),
    path("token/refresh/", TokenRefreshView.as_view(), name="token_refresh")
]