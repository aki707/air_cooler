# Generated by Django 5.0.6 on 2024-06-19 03:48

from django.db import migrations, models


class Migration(migrations.Migration):

    dependencies = [
        ('connect', '0001_initial'),
    ]

    operations = [
        migrations.AlterField(
            model_name='sensor',
            name='description',
            field=models.TextField(blank=True, null=True),
        ),
    ]
