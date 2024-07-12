from rest_framework import serializers
from . import models

class SensorSerializer(serializers.ModelSerializer):
    class Meta:
        model = models.Sensor
        fields = '__all__'
        
class ProductsSerializer(serializers.ModelSerializer):
    class Meta:
        model = models.Products
        fields = '__all__'