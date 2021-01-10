from rest_framework import viewsets, status
from rest_framework.response import Response

from .serializers import WebsiteInfoSerializer
from .utils import analyze

# Create your views here.
class WebsiteInfoViewSet(viewsets.ViewSet):
    """
    A viewset for creating website analysis.
    """

    def create(self, request, *args, **kwargs):

        serializer = WebsiteInfoSerializer(data = request.data)
        serializer.is_valid(raise_exception = True)

        if self.request.user.is_anonymous:
            return Response({
                'detail': "Authentication credentials were not provided."
            }, status = status.HTTP_401_UNAUTHORIZED)

        url = serializer.validated_data['url']
        user_agent = self.request.user.user_agent

        #analyse user keyword analysis
        websiteAnalysis = analyze(url, user_agent)

        return Response({
            "website_analysis": websiteAnalysis,
        }, status = status.HTTP_200_OK)
