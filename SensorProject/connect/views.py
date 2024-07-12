# import json
from django.shortcuts import render,redirect
from rest_framework import viewsets
from . import serializers
from . import models
from django.http import JsonResponse
import requests
from django.contrib.auth.models import User
from django.http import HttpResponse, JsonResponse
# from django.views.decorators.csrf import csrf_exempt


ESP32_IP = 'http://192.168.1.114'  # Replace with the IP address of your ESP32



# Create your views here.

class SensorViewSet(viewsets.ModelViewSet):
    queryset = models.Sensor.objects.all()
    serializer_class = serializers.SensorSerializer

def fetch_sensor_values(request):
    try:
        response = requests.get(ESP32_IP)
        response.raise_for_status()
        data = response.text.split('\n')
        temperature = data[0].split(": ")[1].strip()
        humidity = data[1].split(": ")[1].strip()
        distance_cm = data[2].split(': ')[1].strip().split(' ')[0]
        result = {
                  'temperature': temperature, 
                  'humidity': humidity,
                  'distance_cm': distance_cm,
                  }
    except requests.RequestException as e:
        result = {'error': str(e)}

    return JsonResponse(result)
    


def index(request):
    return render(request, 'index.html')

def login_page(request):
    return render(request, 'login.html')

def register_page(request):
    
    if request.method == "POST":
        first_name = request.POST.get('first_name')
        last_name = request.POST.get('last_name')
        username = request.POST.get('username')
        password = request.POST.get('password')
        
        user = User.objects.create(
            first_name = first_name,
            last_name = last_name,
            username = username,
        )
        user.set_password(password)
        user.save()
        return redirect('/register/')
        
    return render(request, 'register.html')


class ProductsViewSet(viewsets.ModelViewSet):
    queryset = models.Products.objects.all()
    serializer_class = serializers.ProductsSerializer