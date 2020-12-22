from rest_framework import viewsets, status
from rest_framework.permissions import IsAuthenticated
from rest_framework.response import Response
from rest_framework.decorators import action

from .serializers import KeywordAnalysisSerializer
from .utils import analyze

# Create your views here.
class KeywordAnalysisViewSet(viewsets.ViewSet):
    """
    A viewset for creating keyword analysis.
    """

    @action(detail = False, methods = ['post'], permission_classes=[IsAuthenticated])
    def create(self, request, *args, **kwargs):

        serializer = KeywordAnalysisSerializer(data = request.data)
        serializer.is_valid(raise_exception = True)

        keyword = serializer.validated_data['keyword']
        user_agent = self.request.user.user_agent

        #analyse user keyword analysis
        keywordAnalysis = analyze(keyword, user_agent)

        return Response({
            "keyword_analysis": keywordAnalysis,
        }, status = status.HTTP_200_OK)
