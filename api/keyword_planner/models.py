from django.db import models
from accounts.models import User

LANG_CHOICES = [
    ('Polish', 'Polish'),
    ('English', 'English')
]

class KeywordPlanner(models.Model):
    author = models.ForeignKey(User, on_delete = models.CASCADE)
    keyword = models.CharField(max_length = 300)
    language = models.CharField(max_length = 8, choices = LANG_CHOICES, default = 'pl')
    googleKeywords = models.JSONField(null = True, blank = True)
    pytrendsKeywords = models.JSONField(null = True, blank = True)
    serpKeywords = models.JSONField(null = True, blank = True)
    googleSuggestionsQuestions = models.JSONField(null = True, blank = True)
    googleSuggestionsPrepositions = models.JSONField(null = True, blank = True)
    googleSuggestionsComparisons = models.JSONField(null = True, blank = True)
    googleSuggestionsAlphabeticals = models.JSONField(null = True, blank = True)
    publish_date = models.DateTimeField(auto_now_add = True)

    def __str__(self):
        return self.keyword

    class Meta:
        verbose_name = 'Keyword analysis'
        verbose_name_plural = 'Keyword analysis'
