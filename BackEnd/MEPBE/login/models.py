from django.contrib.auth.models import AbstractBaseUser, BaseUserManager, PermissionsMixin
from django.db import models
from django.utils import timezone
from django.utils.text import slugify

class UserManager(BaseUserManager):
    def create_user(self, username, email, password=None, **extra_fields):
        if not email:
            raise ValueError("Email is required")
        if not username:
            raise ValueError("Username is required")
        
        email = self.normalize_email(email)
        user = self.model(email=email, username=username, **extra_fields)
        user.set_password(password)
        user.save(using=self._db)
        return user

    def create_superuser(self, username, email, password=None, **extra_fields):
        extra_fields.setdefault("is_staff", True)
        extra_fields.setdefault("is_superuser", True)

        return self.create_user(username, email, password, **extra_fields)
    

class User(AbstractBaseUser, PermissionsMixin):
    email = models.EmailField(unique=True, max_length=250)
    username = models.CharField(max_length=100, unique=True)
    slug = models.SlugField(blank=True)
    is_active = models.BooleanField(default=True)
    is_staff = models.BooleanField(default=False)
    date_join = models.DateTimeField(default=timezone.now)

    objects = UserManager()

    USERNAME_FIELD = 'email'
    REQUIRED_FIELDS = ['username']

    def save(self, *args, **kwargs):
        if not self.slug:
            self.slug = slugify(self.username, allow_unicode=True)
        super().save(*args, **kwargs)

    def __str__(self):
        return self.username
