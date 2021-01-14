from django.urls import path, include
from rest_framework.routers import SimpleRouter
from .views import UpdateViewSet

router = SimpleRouter()
router.register('', UpdateViewSet, basename = '')

urlpatterns = [
    path('', include(router.urls))
]
