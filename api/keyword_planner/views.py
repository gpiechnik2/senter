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

    def create(self, request, *args, **kwargs):
        serializer = self.get_serializer(data = request.data)
        serializer.is_valid(raise_exception = True)

        user = self.request.user

        #check if users has maximum of keyword analysis
        keywordAnalysisLen = len(KeywordPlanner.objects.filter(author = user))
        if keywordAnalysisLen >= 60:
            return Response(serializer.errors, status=status.HTTP_409_CONFLICT)

        #if not, continue
        self.perform_create(serializer)
        headers = self.get_success_headers(serializer.data)
        return Response(serializer.data, status = status.HTTP_201_CREATED, headers=headers)


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
