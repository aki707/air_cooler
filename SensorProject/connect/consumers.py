import json
from channels.generic.websocket import AsyncWebsocketConsumer

class DataConsumer(AsyncWebsocketConsumer):
    async def connect(self):
        await self.accept()

    async def disconnect(self, close_code):
        pass

    async def receive(self, text_data):
        data = json.loads(text_data)
        # Handle the received data here
        await self.send(text_data=json.dumps({
            'message': 'Data received',
        }))



# import json
# from channels.generic.websocket import AsyncWebsocketConsumer
# from .models import DeviceData

# class DataConsumer(AsyncWebsocketConsumer):
#     async def connect(self):
#         await self.accept()

#     async def disconnect(self, close_code):
#         pass

#     async def receive(self, text_data):
#         data = json.loads(text_data)
#         device_name = data['name']
#         model_name = data['model']

#         # Save data to the database
#         DeviceData.objects.create(device_name=device_name, model_name=model_name)

#         # Optionally send data back to WebSocket client
#         await self.send(text_data=json.dumps({
#             'status': 'Data received',
#             'device_name': device_name,
#             'model_name': model_name
#         }))
