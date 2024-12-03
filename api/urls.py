from django.urls import path, include
from rest_framework import routers
from api import views

router = routers.DefaultRouter()
router.register(r'alumnos', views.AlumnoViewSet)

urlpatterns = [
    path('', include(router.urls))
]
