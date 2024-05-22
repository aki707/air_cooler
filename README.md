# air_cooler

SensorProject/
│
├── SensorProject/
│   ├── __init__.py
│   ├── asgi.py
│   ├── settings.py
│   ├── urls.py         # Include sensors app URLs here
│   ├── wsgi.py
│
├── sensors/
│   ├── __init__.py
│   ├── admin.py
│   ├── apps.py
│   ├── models.py       # Define SensorData model here
│   ├── tests.py
│   ├── urls.py         # Define URL patterns for sensors app here
│   ├── views.py        # Define view functions (sensor_data, display_data) here
│   └── templates/
│       └── sensors/
│           └── display_data.html  # HTML template to display data
│
├── db.sqlite3
└── manage.py
