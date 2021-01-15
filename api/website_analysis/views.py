from rest_framework import viewsets, status
from rest_framework.permissions import IsAuthenticated
from rest_framework.response import Response
from rest_framework.decorators import action
import json

from .serializers import SEOSerializer
from .utils import website_analysis

class SEOViewSet(viewsets.ViewSet):
    """
    A viewset for creating seo analysis.
    """

    @action(detail = False, methods = ['post'], permission_classes=[IsAuthenticated])
    def create(self, request, *args, **kwargs):

        serializer = SEOSerializer(data = request.data)
        serializer.is_valid(raise_exception = True)

        if self.request.user.is_anonymous:
            return Response(status = status.HTTP_401_UNAUTHORIZED)

        url = serializer.validated_data['url']
        user_agent = self.request.user.user_agent

        try:
            analysis = website_analysis(url, user_agent)
        except Exception:
            analysis = []

        return Response({
            "analysis": analysis,
        }, status = status.HTTP_200_OK)
