from django.urls import path
from . import views

urlpatterns = [
    path('', views.index, name='index'),
    path('fetch/', views.fetch_sensor_values, name='fetch_sensor_values'),
]
