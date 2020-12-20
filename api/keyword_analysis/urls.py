from django.urls import path, include
from .views import KeywordAnalysisViewSet

urlpatterns = [
    path('', KeywordAnalysisViewSet.as_view({
        'post': 'create'
    })),
]
