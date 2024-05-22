from django.urls import path
from .views import sensor_data, display_data

urlpatterns = [
    path('sensor-data/', sensor_data, name='sensor_data'),
    path('', display_data, name='display_data'),
]
