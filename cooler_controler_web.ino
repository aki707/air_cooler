#include <WiFi.h>
#include "DHT.h"

#define DHTPIN 4
#define DHTTYPE DHT11
DHT dht(DHTPIN, DHTTYPE);

const int trigPin = 5;
const int echoPin = 18;

//define sound speed in cm/uS
#define SOUND_SPEED 0.034
#define CM_TO_INCH 0.393701

long duration;
float distanceCm;
float distanceInch;

// Replace with your network credentials
const char* ssid = "Airtel";
const char* password = "0987654321";

// Set web server port number to 80
WiFiServer server(80);

// Variable to store the HTTP request
String header;

void setup() {
  Serial.begin(115200);
  Serial.println(F("DHTxx test!"));
  dht.begin();

  // Initialize the ultrasonic sensor pins
  pinMode(trigPin, OUTPUT);
  pinMode(echoPin, INPUT);

  // Connect to Wi-Fi network with SSID and password
  Serial.print("Connecting to ");
  Serial.println(ssid);
  WiFi.begin(ssid, password);
  while (WiFi.status() != WL_CONNECTED) {
    delay(500);
    Serial.print(".");
  }
  // Print local IP address and start web server
  Serial.println("");
  Serial.println("WiFi connected.");
  Serial.println("IP address: ");
  Serial.println(WiFi.localIP());
  server.begin();
}

void loop() {
  WiFiClient client = server.available();   // Listen for incoming clients

  if (client) {                             // If a new client connects,
    Serial.println("New Client.");          // print a message out in the serial port
    String currentLine = "";                // make a String to hold incoming data from the client
    while (client.connected()) {            // loop while the client's connected
      if (client.available()) {             // if there's bytes to read from the client,
        char c = client.read();             // read a byte, then
        Serial.write(c);                    // print it out the serial monitor
        header += c;
        if (c == '\n') {                    // if the byte is a newline character
          // if the current line is blank, you got two newline characters in a row.
          // that's the end of the client HTTP request, so send a response:
          if (currentLine.length() == 0) {
            if (header.indexOf("GET / ") >= 0) {
              // HTTP headers always start with a response code (e.g. HTTP/1.1 200 OK)
              // and a content-type so the client knows what's coming, then a blank line:
              client.println("HTTP/1.1 200 OK");
              client.println("Content-type:text/html");
              client.println("Connection: close");
              client.println();

              // Display the HTML web page
              client.println("<!DOCTYPE html><html>");
              client.println("<head><title>ESP32 Sensor Data</title></head>");
              client.println("<body><h1>ESP32 Sensor Data</h1>");
              client.println("<div id='sensor-data'>Loading...</div>");
              client.println("<script>");
              client.println("setInterval(function() {");
              client.println("fetch('/sensor').then(response => response.json()).then(data => {");
              client.println("document.getElementById('sensor-data').innerHTML = 'Humidity: ' + data.humidity + '%<br>Temperature: ' + data.temperatureC + '°C (' + data.temperatureF + '°F)<br>Heat Index: ' + data.heatIndexC + '°C (' + data.heatIndexF + '°F)<br>Distance: ' + data.distanceCm + ' cm (' + data.distanceInch + ' inches)';");
              client.println("});");
              client.println("}, 2000);"); // Update the sensor data every 2 seconds
              client.println("</script>");
              client.println("</body></html>");

              // Break out of the while loop
              break;
            } else if (header.indexOf("GET /sensor") >= 0) {
              // Read DHT11 sensor data
              float h = dht.readHumidity();
              float t = dht.readTemperature();
              float f = dht.readTemperature(true);

              // Check if any reads failed and exit early (to try again).
              if (isnan(h) || isnan(t) || isnan(f)) {
                Serial.println(F("Failed to read from DHT sensor!"));
              }

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

              // JSON response
              String jsonResponse = "{\"humidity\":";
              jsonResponse += h;
              jsonResponse += ",\"temperatureC\":";
              jsonResponse += t;
              jsonResponse += ",\"temperatureF\":";
              jsonResponse += f;
              jsonResponse += ",\"heatIndexC\":";
              jsonResponse += hic;
              jsonResponse += ",\"heatIndexF\":";
              jsonResponse += hif;
              jsonResponse += ",\"distanceCm\":";
              jsonResponse += distanceCm;
              jsonResponse += ",\"distanceInch\":";
              jsonResponse += distanceInch;
              jsonResponse += "}";

              client.println("HTTP/1.1 200 OK");
              client.println("Content-type:application/json");
              client.println("Connection: close");
              client.println();
              client.println(jsonResponse);
              client.println();

              // Break out of the while loop
              break;
            }
          } else { // if you got a newline, then clear currentLine
            currentLine = "";
          }
        } else if (c != '\r') {  // if you got anything else but a carriage return character,
          currentLine += c;      // add it to the end of the currentLine
        }
      }
    }
    // Clear the header variable
    header = "";
    // Close the connection
    client.stop();
    Serial.println("Client disconnected.");
    Serial.println("");
  }
}
