import os
from channels.auth import AuthMiddlewareStack
from channels.routing import ProtocolTypeRouter, URLRouter
from django.core.asgi import get_asgi_application
import connect.routing  # Import connect.routing to include the WebSocket URL patterns

os.environ.setdefault('DJANGO_SETTINGS_MODULE', 'SensorProject.settings')

application = ProtocolTypeRouter({
    "http": get_asgi_application(),
    "websocket": AuthMiddlewareStack(
        URLRouter(
            connect.routing.websocket_urlpatterns
        )
    ),
})
