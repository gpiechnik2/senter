from django.urls import path
from .views import KeywordAnalysisViewSet

urlpatterns = [
    path('', KeywordAnalysisViewSet.as_view({
        'post': 'create'
    })),
]
