# Generated by Django 3.0.2 on 2020-01-27 20:59

from django.db import migrations, models


class Migration(migrations.Migration):

    dependencies = [
        ('guests', '0016_party_rehearsal_dinner'),
    ]

    operations = [
        migrations.AddField(
            model_name='guest',
            name='song',
            field=models.TextField(blank=True, null=True),
        ),
    ]
