from rest_framework import viewsets, status
from rest_framework.permissions import IsAuthenticated
from rest_framework.response import Response
from rest_framework.decorators import action
import json
from urllib.parse import urlparse


from .serializers import AuditSerializer
from .utils import analysis

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

        #analise website
        websiteAnalysis = analysis(url, user_agent)

        return Response({
            "analysis": websiteAnalysis,
        }, status = status.HTTP_200_OK)
