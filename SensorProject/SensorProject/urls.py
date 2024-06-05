from django.contrib import admin
from django.urls import path, include
from django.conf import settings
from django.conf.urls.static import static
from sensors.views import login_page, register_page

urlpatterns = [
    path('admin/', admin.site.urls),
    path('', include('sensors.urls')),
    path( 'login/', login_page, name=" login_page" ) ,
    path( 'register/', register_page, name=" login_page" ) ,


]+ static(settings.MEDIA_URL, document_root=settings.MEDIA_ROOT)
