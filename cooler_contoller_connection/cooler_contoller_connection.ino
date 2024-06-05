#include <WiFi.h>
#include <WebServer.h>
#include <Adafruit_Sensor.h>
#include <DHT.h>

#define DHTPIN 4      // Pin which is connected to the DHT sensor.
#define DHTTYPE DHT11 // DHT 11

#define TRIGPIN 5     // Pin which is connected to the trigPin of the ultrasonic sensor.
#define ECHOPIN 18    // Pin which is connected to the echoPin of the ultrasonic sensor.



// Replace with your network credentials
const char* ssid = "Airtel";
const char* password = "0987654321";

DHT dht(DHTPIN, DHTTYPE);
WebServer server(80);

void handleRoot() {
  float h = dht.readHumidity();
  float t = dht.readTemperature();
  int distance_cm;
  long duration;


  digitalWrite(TRIGPIN, LOW);
  delayMicroseconds(2);
  digitalWrite(TRIGPIN, HIGH);
  delayMicroseconds(10);
  digitalWrite(TRIGPIN, LOW);
  duration = pulseIn(ECHOPIN, HIGH);
  distance_cm = (duration / 2) / 29.09;
  Serial.println(distance_cm);


  if (isnan(h) || isnan(t) || isnan(distance_cm)) {
    server.send(500, "text/plain", "Failed to read from DHT sensor!");
    return;
  }
  // float h=10.0,t=25.0;

  String message = "Temperature: ";
  message += t;
  message += "\n";
  message += "Humidity: ";
  message += h;
  message += "\n";
  message += "Distance: ";
  message += distance_cm;
  message += "\n";
  server.send(200, "text/plain", message);
  Serial.print(message);
}

void setup() {
  Serial.begin(115200);
  dht.begin();
  pinMode(TRIGPIN, OUTPUT);
  pinMode(ECHOPIN, INPUT);

  // Connect to Wi-Fi
  WiFi.begin(ssid, password);
  while (WiFi.status() != WL_CONNECTED) {
    delay(1000);
    Serial.println("Connecting to WiFi...");
  }
  Serial.println("Connected to WiFi");

  // Start the server
  server.on("/", handleRoot);
  server.begin();
  Serial.println("HTTP server started");
  Serial.println(WiFi.localIP());
}

void loop() {
  server.handleClient();
}



// #include <WiFi.h>
// #include <WebSocketsClient.h>
// #include "DHT.h"

// // Define DHT sensor
// #define DHTPIN 4
// #define DHTTYPE DHT11
// DHT dht(DHTPIN, DHTTYPE);

// // Define ultrasonic sensor pins
// const int trigPin = 5;
// const int echoPin = 18;
// #define SOUND_SPEED 0.034
// #define CM_TO_INCH 0.393701

// // WiFi credentials
// const char* ssid = "realme";
// const char* password = "12345678";

// // WebSocket server details
// const char* websocket_server_host = "127.0.0.1";
// const uint16_t websocket_server_port = 8000;
// const char* websocket_server_path = "/ws/sensor-data/";

// WebSocketsClient webSocket;

// long duration;
// float distanceCm;
// float distanceInch;

// // Function to send sensor data
// void sendSensorData() {
//   float h = dht.readHumidity();
//   float t = dht.readTemperature();
//   float f = dht.readTemperature(true);
//   float hif = dht.computeHeatIndex(f, h);
//   float hic = dht.computeHeatIndex(t, h, false);

//   // Read ultrasonic sensor data
//   digitalWrite(trigPin, LOW);
//   delayMicroseconds(2);
//   digitalWrite(trigPin, HIGH);
//   delayMicroseconds(10);
//   digitalWrite(trigPin, LOW);
//   duration = pulseIn(echoPin, HIGH);
//   distanceCm = duration * SOUND_SPEED / 2;
//   distanceInch = distanceCm * CM_TO_INCH;

//   String jsonData = "{\"humidity\":";
//   jsonData += h;
//   jsonData += ",\"temperatureC\":";
//   jsonData += t;
//   jsonData += ",\"temperatureF\":";
//   jsonData += f;
//   jsonData += ",\"heatIndexC\":";
//   jsonData += hic;
//   jsonData += ",\"heatIndexF\":";
//   jsonData += hif;
//   jsonData += ",\"distanceCm\":";
//   jsonData += distanceCm;
//   jsonData += ",\"distanceInch\":";
//   jsonData += distanceInch;
//   jsonData += "}";

//   webSocket.sendTXT(jsonData);
// }

// // WebSocket event handler
// void webSocketEvent(WStype_t type, uint8_t * payload, size_t length) {
//   switch(type) {
//     case WStype_DISCONNECTED:
//       Serial.println("Disconnected from WebSocket server");
//       break;
//     case WStype_CONNECTED:
//       Serial.println("Connected to WebSocket server");
//       break;
//     case WStype_TEXT:
//       Serial.printf("Received text: %s\n", payload);
//       break;
//     case WStype_BIN:
//       Serial.println("Received binary data");
//       break;
//   }
// }

// void setup() {
//   Serial.begin(115200);
//   dht.begin();
//   pinMode(trigPin, OUTPUT);
//   pinMode(echoPin, INPUT);

//   WiFi.begin(ssid, password);
//   while (WiFi.status() != WL_CONNECTED) {
//     delay(500);
//     Serial.print(".");
//   }
//   Serial.println("");
//   Serial.println("WiFi connected.");

//   webSocket.begin(websocket_server_host, websocket_server_port, websocket_server_path);
//   webSocket.onEvent(webSocketEvent);
// }

// void loop() {
//   webSocket.loop();
//   sendSensorData();
//   delay(2000);
// }