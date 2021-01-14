from rest_framework import viewsets, status
from rest_framework.permissions import IsAuthenticated
from rest_framework.response import Response
from django.http import Http404
from rest_framework.decorators import action
import json
from urllib.parse import urlparse

from .serializers import AuditSerializer, AuditModelSerializer
from .utils import analysis
from .models import Audit

class AuditViewSet(viewsets.ViewSet):
    """
    A viewset for creating audits.
    """

    @action(detail = False, methods = ['post'], permission_classes=[IsAuthenticated])
    def create(self, request, *args, **kwargs):

        serializer = AuditSerializer(data = request.data)
        serializer.is_valid(raise_exception = True)

        url = serializer.validated_data['url']
        user_agent = self.request.user.user_agent

        #clean url to get homepage of url
        url_path = urlparse(url).path
        if str(url_path) == "/" or url_path is None:
            pass
        else:
            url = urlparse(url).scheme + "://" + urlparse(url).netloc + "/"

        try:
            #analise website
            websiteAnalysis = analysis(url, user_agent)
        except Exception:
            websiteAnalysis = []

        return Response({
            "analysis": websiteAnalysis,
        }, status = status.HTTP_200_OK)

class AuditModelViewSet(viewsets.ModelViewSet):
    """
    A viewset for viewing and editing audit instances.
    """

    permission_classes = [IsAuthenticated]
    serializer_class = AuditModelSerializer
    http_method_names = ['get', 'post', 'delete', 'head']

    def get_queryset(self):
        user = self.request.user
        return Audit.objects.filter(author = user)

    def create(self, request, *args, **kwargs):
        serializer = self.get_serializer(data = request.data)
        serializer.is_valid(raise_exception = True)

        user = self.request.user

        self.perform_create(serializer)
        headers = self.get_success_headers(serializer.data)
        return Response(serializer.data, status = status.HTTP_201_CREATED, headers = headers)

    def destroy(self, request, *args, **kwargs):
        try:
            instance = self.get_object()
            user = self.request.user

            if instance.author != user:
                return Response(status = status.HTTP_401_UNAUTHORIZED)
            else:
                self.perform_destroy(instance)

        #works only if pk is not connected with current user
        except Http404:
            return Response(status = status.HTTP_401_UNAUTHORIZED)

        return Response(status = status.HTTP_204_NO_CONTENT)

    def get_paginated_response(self, data):
        return Response(data)
