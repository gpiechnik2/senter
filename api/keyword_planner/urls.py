from django.urls import path, include
from rest_framework.routers import SimpleRouter
from .views import KeyWordPlannerViewSet

router = SimpleRouter()
router.register('', KeyWordPlannerViewSet, basename = '')

urlpatterns = [
    path('', include(router.urls))
]
