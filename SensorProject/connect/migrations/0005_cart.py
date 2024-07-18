# Generated by Django 5.0.6 on 2024-07-18 05:09

from django.db import migrations, models


class Migration(migrations.Migration):

    dependencies = [
        ('connect', '0004_alter_user_email_alter_user_username'),
    ]

    operations = [
        migrations.CreateModel(
            name='Cart',
            fields=[
                ('id', models.BigAutoField(auto_created=True, primary_key=True, serialize=False, verbose_name='ID')),
                ('product_name', models.CharField(max_length=255)),
                ('product_price', models.IntegerField()),
                ('timestamp', models.DateTimeField(auto_now_add=True)),
                ('created_at', models.DateTimeField(auto_now_add=True)),
                ('updated_at', models.DateTimeField(auto_now=True)),
            ],
        ),
    ]