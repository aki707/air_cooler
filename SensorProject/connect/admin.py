from django.contrib import admin
from . import models
from connect.models import Profile, User



class UserAdmin(admin.ModelAdmin):
    list_display = ['username','email']

class ProfileAdmin(admin.ModelAdmin):
    list_editable = ['verified']
    list_display = ['full_name', 'user', 'verified']

admin.site.register(User,UserAdmin)
admin.site.register(Profile, ProfileAdmin)




# Register your models here.
admin.site.register(models.Sensor)
# admi.site.register(models.Device)
admin.site.register(models.DeviceData)
admin.site.register(models.Products)
admin.site.register(models.Cart)