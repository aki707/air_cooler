from . import views 
from rest_framework import routers

router = routers.DefaultRouter()
router.register(r'sensors', views.SensorViewSet, basename='sensor'  )
router.register(r'products', views.ProductsViewSet, basename='product'  )

urlpatterns = [

]

urlpatterns += router.urls
