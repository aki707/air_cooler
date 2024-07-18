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

from .serializers import MyTOPS, RegistrationSerializer
from .models import User
from rest_framework.decorators import api_view, permission_classes
from rest_framework.response import Response
from rest_framework_simplejwt.views import TokenObtainPairView
from rest_framework import generics
from rest_framework.permissions import AllowAny, IsAuthenticated
from rest_framework import status



from django.contrib.auth import get_user_model

User = get_user_model()

ESP32_IP = 'http://192.168.1.114'  # Replace with the IP address of your ESP32



# Create your views here.



class MyTokenObtainPairView(TokenObtainPairView):
    serializer_class = MyTOPS

class RegisterView(generics.CreateAPIView):
    queryset = User.objects.all()
    permission_classes = (AllowAny,)
    serializer_class = RegistrationSerializer

@api_view(['GET'])
@permission_classes([IsAuthenticated])
def protectedView(request):
    output = f"Welcome {request.user.profile.full_name}, Authentication SUccessful"
    return Response({'response':output}, status=status.HTTP_200_OK)


@api_view(['GET'])
def view_all_routes(request):
    router = [
        'connect/token/refresh/',
        'connect/register/',
        'connect/token/'
    ]

    return Response(router)



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
    
class CartViewSet(viewsets.ModelViewSet):
    queryset = models.Cart.objects.all()
    serializer_class = serializers.CartSerializer