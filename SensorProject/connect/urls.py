from . import views 
from rest_framework import routers

router = routers.DefaultRouter()
router.register(r'sensors', views.SensorViewSet, basename='sensor'  )

urlpatterns = [

]

urlpatterns += router.urls
