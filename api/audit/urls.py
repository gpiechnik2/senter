from django.urls import path, include
from .views import AuditViewSet, AuditModelViewSet
from rest_framework.routers import SimpleRouter

router = SimpleRouter()
router.register('', AuditModelViewSet, basename = '')

urlpatterns = [
    path('check/', AuditViewSet.as_view({
        'post': 'create'
    })),
    path('', include(router.urls))
]
