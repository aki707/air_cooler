from django.contrib import admin
from . import models

# Register your models here.
admin.site.register(models.Sensor)
# admi.site.register(models.Device)
admin.site.register(models.DeviceData)