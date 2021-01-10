from rest_framework import viewsets, status
from rest_framework.permissions import IsAuthenticated
from rest_framework.response import Response
from django.http import Http404

from .models import ContentAnalysis
from .serializers import ContentAnalysisSerializer
from .utils import analize_content

class ContentAnalysisViewSet(viewsets.ModelViewSet):
    """
    A viewset for viewing and editing content analysis instances.
    """

    permission_classes = [IsAuthenticated]
    serializer_class = ContentAnalysisSerializer
    http_method_names = ['get', 'post', 'delete', 'update', 'head']

    def get_queryset(self):
        user = self.request.user
        return ContentAnalysis.objects.filter(author = user)

    def create(self, request, *args, **kwargs):

        #check if serializer is valid
        serializer = ContentAnalysisSerializer(data = request.data)
        if serializer.is_valid():

            #check if users has maximum of content analysis
            analysislen = len(ContentAnalysis.objects.filter(author = user))
            if analysislen > 6:
                return Response(serializer.errors, status = status.HTTP_409_CONFLICT)

            #if not, continue
            analysis = ContentAnalysis.objects.create(request.data)
            analysis.save()

            return Response(status = status.HTTP_201_CREATED)

        else:
            return Response(serializer.errors,
                            status = status.HTTP_400_BAD_REQUEST)

    def destroy(self, request, *args, **kwargs):
        try:
            instance = self.get_object()
            user = self.request.user

            #check if author is current user
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

class ContentAnalysisRealTimeViewSet(viewsets.ViewSet):
    """
    A viewset for creating content analysis in real time.
    """

    def create(self, request, *args, **kwargs):

        serializer = ContentAnalysisSerializer(data = request.data)
        serializer.is_valid(raise_exception = True)

        if self.request.user.is_anonymous:
            return Response({
                'detail': "Authentication credentials were not provided."
            }, status = status.HTTP_401_UNAUTHORIZED)

        text_to_check = serializer.validated_data['text_to_check']
        keyword = serializer.validated_data['keyword']
        page_title = serializer.validated_data['page_title']
        meta_description = serializer.validated_data['meta_description']

        #analyse user Content analysis
        analysis = analize_content(keyword, text_to_check, page_title, meta_description)

        return Response({
            'analysis': analysis
        }, status = status.HTTP_200_OK)
