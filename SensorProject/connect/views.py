from django.shortcuts import render
from rest_framework import viewsets
from . import serializers
from . import models


# Create your views here.

class SensorViewSet(viewsets.ModelViewSet):
    queryset = models.Sensor.objects.all()
    serializer_class = serializers.SensorSerializer
