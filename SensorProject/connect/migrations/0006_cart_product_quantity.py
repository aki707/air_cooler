# Generated by Django 5.0.6 on 2024-07-19 02:57

from django.db import migrations, models


class Migration(migrations.Migration):

    dependencies = [
        ('connect', '0005_cart'),
    ]

    operations = [
        migrations.AddField(
            model_name='cart',
            name='product_quantity',
            field=models.IntegerField(default=1),
        ),
    ]
