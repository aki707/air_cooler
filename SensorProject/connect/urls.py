from . import views 
from rest_framework import routers

from django.urls import path
from rest_framework_simplejwt.views import (TokenRefreshView)


router = routers.DefaultRouter()
router.register(r'sensors', views.SensorViewSet, basename='sensor'  )
router.register(r'products', views.ProductsViewSet, basename='product'  )
router.register(r'Carts', views.CartViewSet, basename='cart'  )

urlpatterns = [
    path('token/', views.MyTokenObtainPairView.as_view(),name="token-obtain"),
    path('token/refresh/', TokenRefreshView.as_view(), name="refresh-token"),
    path('register/', views.RegisterView.as_view(), name="register-user"),
    path('test/', views.protectedView, name="test"),
    path('', views.view_all_routes, name="all-routes"),
        
]

urlpatterns += router.urls
