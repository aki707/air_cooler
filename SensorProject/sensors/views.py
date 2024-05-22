from django.shortcuts import render

# Create your views here.
from django.shortcuts import render
from django.http import JsonResponse
from django.views.decorators.csrf import csrf_exempt
import json
from .models import SensorData

@csrf_exempt
def sensor_data(request):
    if request.method == 'POST':
        data = json.loads(request.body)
        sensor_data = SensorData.objects.create(
            humidity=data['humidity'],
            temperatureC=data['temperatureC'],
            temperatureF=data['temperatureF'],
            heatIndexC=data['heatIndexC'],
            heatIndexF=data['heatIndexF'],
            distanceCm=data['distanceCm'],
            distanceInch=data['distanceInch']
        )
        return JsonResponse({'status': 'success'})
    return JsonResponse({'status': 'error'})

def display_data(request):
    sensor_data = SensorData.objects.all().order_by('-timestamp')[:10]
    return render(request, 'sensors/display_data.html', {'sensor_data': sensor_data})
