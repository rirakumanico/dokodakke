# Generated by Django 2.2.5 on 2020-08-05 06:03

from django.db import migrations, models
import django.utils.timezone
import uuid


class Migration(migrations.Migration):

    initial = True

    dependencies = [
    ]

    operations = [
        migrations.CreateModel(
            name='Dokodakke',
            fields=[
                ('id', models.UUIDField(default=uuid.uuid4, editable=False, primary_key=True, serialize=False)),
                ('item_name', models.CharField(max_length=20, verbose_name='item')),
                ('item_place', models.CharField(max_length=20, verbose_name='置いた場所')),
                ('item_remarks', models.CharField(max_length=30, null=True, verbose_name='備考')),
                ('created_at', models.DateTimeField(default=django.utils.timezone.now)),
            ],
            options={
                'verbose_name_plural': 'dokodakkeモデル',
                'db_table': 'dokodakke',
            },
        ),
    ]