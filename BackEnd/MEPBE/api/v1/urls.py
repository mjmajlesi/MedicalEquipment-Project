from django.urls import path
from .views import login_page, sign_up_page
from .pd_api.views import products_detail_page, products_detail_list
from rest_framework_simplejwt.views import TokenRefreshView

urlpatterns = [
    path("sign_up/", sign_up_page, name="sign_up_page"),
    path("login/", login_page, name="login_page"),
    path("products_detail/", products_detail_list, name="products_detail_list"),
    path("products_detail/<path:slug>/", products_detail_page, name="products_detail_page"),
    path("token/refresh/", TokenRefreshView.as_view(), name="token_refresh")
]