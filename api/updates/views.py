from rest_framework import viewsets, status
from rest_framework.permissions import IsAuthenticated
from rest_framework.response import Response
from django.http import Http404

from .models import Update
from .serializers import UpdateSerializer

# Create your views here.
class UpdateViewSet(viewsets.ReadOnlyModelViewSet):
    """
    A simple ViewSet for viewing updates.
    """
    queryset = Update.objects.all()
    serializer_class = UpdateSerializer

    def get_paginated_response(self, data):
        return Response(data)
