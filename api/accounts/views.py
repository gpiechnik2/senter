from django.shortcuts import render
from rest_framework import status
from rest_framework.response import Response
from rest_framework import viewsets, renderers
from rest_framework.permissions import IsAuthenticatedOrReadOnly, IsAuthenticated
from rest_framework.authtoken.views import ObtainAuthToken
from rest_framework.authtoken.models import Token
from rest_framework.decorators import action

from .models import User
from .serializers import UserSerializer, UserGoogleJWTSerializer, PasswordSerializer, ChangeEmailSerializer, ChangeContactEmailSerializer, ChangeUserAgentSerializer

import requests
import jwt
import json

class UserViewSet(viewsets.ViewSet):

    renderer_classes = [renderers.JSONRenderer]

    #register
    @action(detail = True, methods = ['post'])
    def create(self, request, *args, **kwargs):

        #check if serializer is valid
        serializer = UserSerializer(data = request.data)
        if serializer.is_valid():

            #check if user with posted email exists
            email = serializer.validated_data['email']
            users = User.objects.filter(email = email)

            #if user with given credentials exists, return status 409
            if users:
                return Response({"email": "User with given email already exists."}, status = status.HTTP_409_CONFLICT)

            #check if password and re_password are the same
            password = serializer.validated_data['password']
            re_password = serializer.validated_data['re_password']

            if password != re_password:
                return Response(status = status.HTTP_400_BAD_REQUEST)

            #create user with given data
            first_name = serializer.validated_data.get('first_name', '')
            user = User.objects.create(email = email, first_name = first_name)
            user.set_password(password)
            user.save()

            #return user token, if does not exist, create new before
            token, created = Token.objects.get_or_create(user = user)
            return Response({
                'auth_token': token.key
            })

        else:
            return Response(serializer.errors,
                            status = status.HTTP_400_BAD_REQUEST)

    #set password
    @action(detail = True, methods = ['post'], permission_classes=[IsAuthenticated])
    def set_password(self, request, *args, **kwargs):

        serializer = PasswordSerializer(data = request.data)
        if serializer.is_valid():

            #check if user is anonymous
            user = self.request.user
            if user.is_anonymous:
                return Response({"User": "Anonymous users can not change user password."},
                                status = status.HTTP_401_UNAUTHORIZED)

            #check if validated data is the same

            if not user.check_password(serializer.data.get("current_password")):
                return Response({"current_password": "Wrong current password."}, status = status.HTTP_400_BAD_REQUEST)

            if serializer.data['current_password'] != serializer.data['new_password']:
                user.set_password(serializer.data['new_password'])
                user.save()
                return Response({"password": "Password has been changed."}, status = status.HTTP_200_OK)

            else:
                return Response(serializer.errors,
                                status = status.HTTP_400_BAD_REQUEST)
        else:
            return Response(serializer.errors,
                            status = status.HTTP_400_BAD_REQUEST)

    #change email
    @action(detail = True, methods = ['post'], permission_classes=[IsAuthenticated])
    def change_email(self, request, *args, **kwargs):

        serializer = ChangeEmailSerializer(data = request.data)
        if serializer.is_valid():

            #check if user is anonymous
            user = self.request.user
            if user.is_anonymous:
                return Response({"User": "Anonymous users can not change user password."},
                                status = status.HTTP_401_UNAUTHORIZED)

            email = serializer.data['new_email']
            emailsqry = User.objects.filter(email = email)

            if not emailsqry:
                user.email = email
                user.save()
                return Response({"new_email": "Email has been changed."}, status = status.HTTP_200_OK)
            else:
                return Response({"new_email": "User with provided email already exists."},
                                status = status.HTTP_400_BAD_REQUEST)
        else:
            return Response(serializer.errors,
                            status = status.HTTP_400_BAD_REQUEST)

    #change email
    @action(detail = True, methods = ['post'], permission_classes=[IsAuthenticated])
    def change_contact_email(self, request, *args, **kwargs):

        serializer = ChangeContactEmailSerializer(data = request.data)
        if serializer.is_valid():

            #check if user is anonymous
            user = self.request.user
            if user.is_anonymous:
                return Response({"User": "Anonymous users can not change user password."},
                                status = status.HTTP_401_UNAUTHORIZED)

            email = serializer.data['new_contact_email']
            user.contact_email = email
            user.save()
            return Response({"new_contact_email": "Contact email has been changed."}, status = status.HTTP_200_OK)

        else:
            return Response(serializer.errors,
                            status = status.HTTP_400_BAD_REQUEST)

    #change user agent
    @action(detail = True, methods = ['post'], permission_classes=[IsAuthenticated])
    def change_user_agent(self, request, *args, **kwargs):

        serializer = ChangeUserAgentSerializer(data = request.data)
        if serializer.is_valid():

            #check if user is anonymous
            user = self.request.user
            if user.is_anonymous:
                return Response({"User": "Anonymous users can not change user agent."},
                                status = status.HTTP_401_UNAUTHORIZED)

            user_agent = serializer.data['user_agent']
            user.user_agent = user_agent
            user.save()
            return Response({"user_agent": "User agent has been changed."}, status = status.HTTP_200_OK)

        else:
            return Response(serializer.errors,
                            status = status.HTTP_400_BAD_REQUEST)

class GoogleJwtAuthToken(ObtainAuthToken):

    serializer_class = UserGoogleJWTSerializer
    renderer_classes = [renderers.JSONRenderer]

    def post(self, request, *args, **kwargs):

        #check if serializer is valid
        serializer = self.serializer_class(data = request.data,
                                           context = {'request': request})
        serializer.is_valid(raise_exception=True)

        #check if google id_token is correct
        id_token = serializer.validated_data['id_token']

        #if not, return status 400
        url = "https://www.googleapis.com/oauth2/v3/tokeninfo?id_token={}".format(id_token)
        response = requests.post(url)

        if response.status_code != 200:
            return Response(status = status.HTTP_400_BAD_REQUEST)

        #decode user token
        encoded_token = json.loads(response.text)

        #get user info from id_token
        email = encoded_token['email']
        first_name = encoded_token['given_name']

        #check if user exists, if not, create new with email above
        user = User.objects.filter(email = email)

        if not user:

            #create random hash
            password = User.objects.make_random_password()
            user = User.objects.create(email = email, first_name = first_name)
            user.set_password(password)
            user.save()

        else:
            user = user[0]

        #return user token, if does not exist, create new before
        token, created = Token.objects.get_or_create(user = user)
        return Response({
            'auth_token': token.key
        })
