from rest_framework import viewsets, status
from rest_framework.permissions import IsAuthenticated
from rest_framework.response import Response
from rest_framework.decorators import action

from .serializers import WebsiteInfoSerializer
from .utils import analyze

# Create your views here.
class WebsiteInfoViewSet(viewsets.ViewSet):
    """
    A viewset for creating website analysis.
    """

    @action(detail = False, methods = ['post'], permission_classes=[IsAuthenticated])
    def create(self, request, *args, **kwargs):

        serializer = WebsiteInfoSerializer(data = request.data)
        serializer.is_valid(raise_exception = True)

        url = serializer.validated_data['url']
        user_agent = self.request.user.user_agent

        #analyse user keyword analysis
        websiteAnalysis = analyze(url, user_agent)

        return Response({
            "website_analysis": websiteAnalysis,
        }, status = status.HTTP_200_OK)
