from django.urls import path
from .views import PageSpeedAnalizeViewSet, SEOViewSet

urlpatterns = [
    path('pagespeedinsights/', PageSpeedAnalizeViewSet.as_view({
        'post': 'create'
    })),
    path('seo/', SEOViewSet.as_view({
        'post': 'create'
    })),
]
