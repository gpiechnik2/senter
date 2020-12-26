from django.urls import path
from .views import AuditViewSet

urlpatterns = [
    path('', AuditViewSet.as_view({
        'post': 'create'
    })),
]
