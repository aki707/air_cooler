#include <WiFi.h>
#include <HTTPClient.h>
#include "DHT.h"

#define DHTPIN 4
#define DHTTYPE DHT11
DHT dht(DHTPIN, DHTTYPE);

const int trigPin = 5;
const int echoPin = 18;
#define SOUND_SPEED 0.034
#define CM_TO_INCH 0.393701

const char* ssid = "Airtel";
const char* password = "0987654321";
const char* serverName = "http://127.0.0.1:8000//sensors/sensor-data/";

long duration;
float distanceCm;
float distanceInch;

void setup() {
  Serial.begin(115200);
  dht.begin();
  pinMode(trigPin, OUTPUT);
  pinMode(echoPin, INPUT);

  WiFi.begin(ssid, password);
  while (WiFi.status() != WL_CONNECTED) {
    delay(500);
    Serial.print(".");
  }
  Serial.println("");
  Serial.println("WiFi connected.");
}

void loop() {
  if (WiFi.status() == WL_CONNECTED) {
    HTTPClient http;

    // Reading DHT11 sensor data
    float h = dht.readHumidity();
    float t = dht.readTemperature();
    float f = dht.readTemperature(true);

    // Compute heat index
    float hif = dht.computeHeatIndex(f, h);
    float hic = dht.computeHeatIndex(t, h, false);

    // Read ultrasonic sensor data
    digitalWrite(trigPin, LOW);
    delayMicroseconds(2);
    digitalWrite(trigPin, HIGH);
    delayMicroseconds(10);
    digitalWrite(trigPin, LOW);
    duration = pulseIn(echoPin, HIGH);
    distanceCm = duration * SOUND_SPEED / 2;
    distanceInch = distanceCm * CM_TO_INCH;

    // Create JSON object
    String jsonData = "{\"humidity\":";
    jsonData += h;
    jsonData += ",\"temperatureC\":";
    jsonData += t;
    jsonData += ",\"temperatureF\":";
    jsonData += f;
    jsonData += ",\"heatIndexC\":";
    jsonData += hic;
    jsonData += ",\"heatIndexF\":";
    jsonData += hif;
    jsonData += ",\"distanceCm\":";
    jsonData += distanceCm;
    jsonData += ",\"distanceInch\":";
    jsonData += distanceInch;
    jsonData += "}";

    http.begin(serverName);
    http.addHeader("Content-Type", "application/json");

    int httpResponseCode = http.POST(jsonData);

    if (httpResponseCode > 0) {
      String response = http.getString();
      Serial.println(httpResponseCode);
      Serial.println(response);
    } else {
      Serial.print("Error on sending POST: ");
      Serial.println(httpResponseCode);
    }

    http.end();
  }

  delay(2000);
}
