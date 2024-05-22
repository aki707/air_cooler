from django.db import models

class SensorData(models.Model):
    timestamp = models.DateTimeField(auto_now_add=True)
    humidity = models.FloatField()
    temperatureC = models.FloatField()
    temperatureF = models.FloatField()
    heatIndexC = models.FloatField()
    heatIndexF = models.FloatField()
    distanceCm = models.FloatField()
    distanceInch = models.FloatField()

    def __str__(self):
        return f"{self.timestamp} - {self.temperatureC}°C"
