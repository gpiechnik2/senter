from django.urls import path, include
from django.contrib.auth.models import User
from rest_framework.routers import DefaultRouter, SimpleRouter
from rest_framework import routers, serializers, viewsets
from .views import UserViewSet, GoogleJwtAuthToken

urlpatterns = [
    path('users/', UserViewSet.as_view({
        'post': 'create'
    })),
    path('users/set-password/', UserViewSet.as_view({
        'post': 'set_password'
    })),
    path('users/change-email/', UserViewSet.as_view({
        'post': 'change_email'
    })),
    path('users/change-contact-email/', UserViewSet.as_view({
        'post': 'change_contact_email'
    })),
    path('users/change-user-agent/', UserViewSet.as_view({
        'post': 'change_user_agent'
    })),
    path('', include('djoser.urls.authtoken')),
    path('google/token/login/', GoogleJwtAuthToken.as_view())

]
