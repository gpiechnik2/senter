from rest_framework import serializers
from .models import KeywordPlanner
from .utils import google_keywords, pytrends_query, serp_keywords, google_suggestions_keywords
from accounts.models import User

class KeywordPlannerSerializer(serializers.ModelSerializer):
    keyword = serializers.CharField()
    language = serializers.CharField()
    googleKeywords = serializers.JSONField(read_only = True)
    pytrendsKeywords = serializers.JSONField(read_only = True)
    serpKeywords = serializers.JSONField(read_only = True)
    googleSuggestionsQuestions = serializers.JSONField(read_only = True)
    googleSuggestionsPrepositions = serializers.JSONField(read_only = True)
    googleSuggestionsComparisons = serializers.JSONField(read_only = True)
    googleSuggestionsAlphabeticals = serializers.JSONField(read_only = True)
    publish_date = serializers.DateTimeField(read_only = True)

    class Meta:
        model = KeywordPlanner
        fields = [
            'id',
            'keyword',
            'language',
            'googleKeywords',
            'pytrendsKeywords',
            'serpKeywords',
            'googleSuggestionsQuestions',
            'googleSuggestionsPrepositions',
            'googleSuggestionsComparisons',
            'googleSuggestionsAlphabeticals',
            'publish_date']

    def create(self, request):

        user = self.context['request'].user
        keyword = request['keyword']
        language = request['language']

        user_agent = user.user_agent

        googleKeywords = google_keywords(keyword, user_agent)
        pyTrendsKeywords = pytrends_query(keyword, language)
        serpKeywords = serp_keywords(keyword, user_agent)
        googleSuggestionsKeywords = google_suggestions_keywords(keyword, user_agent)

        newAnalysis = KeywordPlanner.objects.create(
            author = user,
            language = language,
            keyword = keyword,
            googleKeywords = googleKeywords,
            pytrendsKeywords = pyTrendsKeywords,
            serpKeywords = serpKeywords,
            googleSuggestionsQuestions = googleSuggestionsKeywords[0],
            googleSuggestionsPrepositions = googleSuggestionsKeywords[1],
            googleSuggestionsComparisons = googleSuggestionsKeywords[2],
            googleSuggestionsAlphabeticals = googleSuggestionsKeywords[3]
        )

        return newAnalysis
