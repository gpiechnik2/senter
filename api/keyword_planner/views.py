from rest_framework import viewsets, status
from rest_framework.permissions import IsAuthenticated
from rest_framework.response import Response
from django.http import Http404

from .models import KeywordPlanner
from .serializers import KeywordPlannerSerializer

class KeyWordPlannerViewSet(viewsets.ModelViewSet):
    """
    A viewset for viewing and editing keyword planner instances.
    """

    permission_classes = [IsAuthenticated]
    serializer_class = KeywordPlannerSerializer
    http_method_names = ['get', 'post', 'delete', 'head']

    def get_queryset(self):
        user = self.request.user
        return KeywordPlanner.objects.filter(author = user)

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
