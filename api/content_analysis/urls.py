from django.urls import path, include
from rest_framework.routers import DefaultRouter
from .views import ContentAnalysisViewSet, ContentAnalysisRealTimeViewSet

router = DefaultRouter()
router.register('', ContentAnalysisViewSet, basename = '')

urlpatterns = [
    path('analyse/', include(router.urls)),
    path('check/', ContentAnalysisRealTimeViewSet.as_view({
        'post': 'create'
    })),
]
