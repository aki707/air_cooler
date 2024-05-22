from django.contrib import admin
from django.urls import path, include
from django.http import HttpResponseRedirect

urlpatterns = [
    path('admin/', admin.site.urls),
    path('sensors/', include('sensors.urls')),
    path('', lambda request: HttpResponseRedirect('/sensors/')),
]
