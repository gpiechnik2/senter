from django.urls import path
from .views import WebsiteInfoViewSet

urlpatterns = [
    path('', WebsiteInfoViewSet.as_view({
        'post': 'create'
    })),
]
