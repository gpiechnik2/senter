from django.urls import path, include
from rest_framework.routers import DefaultRouter
from .views import KeyWordPlannerViewSet

router = DefaultRouter()
router.register('', KeyWordPlannerViewSet, basename = '')

urlpatterns = [
    path('', include(router.urls))
]
