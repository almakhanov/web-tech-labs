# Generated by Django 2.1.5 on 2019-04-23 06:43

import datetime
from django.db import migrations, models


class Migration(migrations.Migration):

    dependencies = [
        ('api', '0002_auto_20190423_1132'),
    ]

    operations = [
        migrations.AlterField(
            model_name='task',
            name='created_at',
            field=models.DateTimeField(verbose_name=datetime.datetime(2019, 4, 23, 12, 43, 21, 868531)),
        ),
    ]