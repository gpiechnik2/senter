# Generated by Django 3.1 on 2021-01-14 22:30

from django.db import migrations, models


class Migration(migrations.Migration):

    dependencies = [
        ('keyword_planner', '0003_auto_20201217_0346'),
    ]

    operations = [
        migrations.AlterField(
            model_name='keywordplanner',
            name='language',
            field=models.CharField(choices=[('pl', 'Polish'), ('en', 'English')], default='pl', max_length=6),
        ),
    ]
