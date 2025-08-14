from django.urls import path, include

app_name = "login_api"
urlpatterns = [
    path("v1/", include("api.v1.urls"))   
]