from django.urls import path
from .views import login_page, sign_up_page

urlpatterns = [
    path("sign_up/", sign_up_page, name="sign_up_page"),
    path("login/", login_page, name="login_page")
]