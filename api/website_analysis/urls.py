from django.urls import path
from .views import SEOViewSet

urlpatterns = [
    path('seo/', SEOViewSet.as_view({
        'post': 'create'
    })),
]
