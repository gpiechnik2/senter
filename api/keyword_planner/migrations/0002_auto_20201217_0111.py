# Generated by Django 3.1 on 2020-12-17 01:11

from django.db import migrations


class Migration(migrations.Migration):

    dependencies = [
        ('keyword_planner', '0001_initial'),
    ]

    operations = [
        migrations.RenameField(
            model_name='keywordplanner',
            old_name='lang',
            new_name='language',
        ),
    ]
