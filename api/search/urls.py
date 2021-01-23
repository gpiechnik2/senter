from django.urls import path
from .views import SearchViewSet

urlpatterns = [
    path('', SearchViewSet.as_view({
        'post': 'create'
    })),
]
