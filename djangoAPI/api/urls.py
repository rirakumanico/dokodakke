from django.urls import path, include
from rest_framework import routers

from . import views

router = routers.DefaultRouter()
router.register('dokodakke', views.DokodakkeViewSet)

app_name = 'api'
urlpatterns = [
    path('', include(router.urls)),
]
