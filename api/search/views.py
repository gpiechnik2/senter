from rest_framework import viewsets, status
from rest_framework.response import Response

from updates.models import Update
from audit.models import Audit
from content_analysis.models import ContentAnalysis
from keyword_planner.models import KeywordPlanner

from .serializers import SearchSerializer, UpdateSerializer


# Create your views here.
class SearchViewSet(viewsets.ViewSet):
    """
    A viewset for creating website analysis.
    """

    def create(self, request, *args, **kwargs):

        serializer = SearchSerializer(data = request.data)
        serializer.is_valid(raise_exception = True)

        if self.request.user.is_anonymous:
            return Response({
                'detail': "Authentication credentials were not provided."
            }, status = status.HTTP_401_UNAUTHORIZED)

        user = self.request.user

        #search query
        searchQuery = serializer.validated_data['searchQuery']

        if searchQuery:
            updates = Update.objects.filter(update__icontains = searchQuery)
            audits = Audit.objects.filter(author = user, audit__icontains = searchQuery)
            contentAnalysis = ContentAnalysis.objects.filter(author = user, text_to_check__icontains = searchQuery)
            keywordPlanners = KeywordPlanner.objects.filter(author = user).filter(keyword__icontains = searchQuery)

        #results
        results = []

        #updates update
        if updates:
            for update in updates:
                results.append({
                    "endpoint": "updates/" + str(update.id) + "/",
                    "result": "Update: "+ update.update
                })

        #audits update
        if audits:
            for audit in audits:
                results.append({
                    "endpoint": "audit/" + str(audit.id) + "/",
                    "result": "Audit of " + audit.url
                })

        #content analysis update
        if contentAnalysis:
            for cA in contentAnalysis:
                if cA.keyword:
                    results.append({
                        "endpoint": "content-analysis/analyse/" + str(cA.id) + "/",
                        "result": "Content analysis of: " + cA.keyword
                    })
                    continue
                if cA.meta_description:
                    results.append({
                        "endpoint": "content-analysis/analyse/" + str(cA.id) + "/",
                        "result": "Content analysis of: " + cA.meta_description
                    })
                    continue
                if cA.page_title:
                    results.append({
                        "endpoint": "content-analysis/analyse/" + str(cA.id) + "/",
                        "result": "Content analysis of: " + cA.page_title
                    })
                    continue
                if cA.text_to_check:
                    results.append({
                        "endpoint": "content-analysis/analyse/" + str(cA.id) + "/",
                        "result": "Content analysis of: " + cA.text_to_check
                    })
                    continue

        #audits update
        if keywordPlanners:
            for planner in keywordPlanners:
                results.append({
                    "endpoint": "keyword-planner/" + str(planner.id) + "/",
                    "result": "Keyword planner of: " + planner.keyword + " keyword."
                })


        return Response({
            "results": results,
        }, status = status.HTTP_200_OK)
