from djoser.serializers import UserCreateSerializer, UserSerializer
from rest_framework import serializers
from .models import *

class UserGoogleJWTSerializer(serializers.Serializer):
    id_token = serializers.CharField()

class UserFacebookATSerializer(serializers.Serializer):
    access_token = serializers.CharField()
    facebookId = serializers.CharField()

class PasswordSerializer(serializers.Serializer):
    current_password = serializers.CharField()
    new_password = serializers.CharField()

class ChangeEmailSerializer(serializers.Serializer):
    new_email = serializers.CharField(required = True)

class ChangeContactEmailSerializer(serializers.Serializer):
    contact_email = serializers.CharField(required = True)

class UserSerializer(serializers.Serializer):
    email = serializers.EmailField(required = True)
    first_name = serializers.CharField(required = False)
    password = serializers.CharField()
    re_password = serializers.CharField()

    class Meta:
        model = User
        fields = ('id', 'email', 'first_name', 'password', 're_password')
