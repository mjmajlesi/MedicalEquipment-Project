from .models import User
from rest_framework import serializers
from django.utils.text import slugify

class UserSerializer(serializers.ModelSerializer):
    class Meta:
        model = User
        fields = "__all__"
        read_only_fields = ['slug']
        extra_kwargs = {
            "password": {'write_only': True}
        }
    
    def create(self, validated_data):
        password = validated_data.pop("password", None)
        if "username" in validated_data:
            validated_data["slug"] = slugify(validated_data["username"])
        user = User.objects.create_user(password=password, **validated_data)
        return user
    
    def update(self, instance, validated_data):
        password = validated_data.pop("password", None)
        user = super().update(instance, validated_data)
        if password:
            user.set_password(password)
            user.save()
        return user