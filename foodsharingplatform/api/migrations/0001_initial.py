# Generated by Django 4.2.1 on 2023-05-24 14:33

from django.db import migrations, models
import django.db.models.deletion


class Migration(migrations.Migration):

    initial = True

    dependencies = [
    ]

    operations = [
        migrations.CreateModel(
            name='FoodItem',
            fields=[
                ('id', models.BigAutoField(auto_created=True, primary_key=True, serialize=False, verbose_name='ID')),
                ('name', models.CharField(max_length=200)),
                ('description', models.TextField()),
                ('quantity', models.PositiveIntegerField(default=0)),
            ],
        ),
        migrations.CreateModel(
            name='User',
            fields=[
                ('id', models.BigAutoField(auto_created=True, primary_key=True, serialize=False, verbose_name='ID')),
                ('name', models.CharField(max_length=200)),
                ('email', models.EmailField(max_length=254, unique=True)),
            ],
        ),
        migrations.CreateModel(
            name='Donation',
            fields=[
                ('id', models.BigAutoField(auto_created=True, primary_key=True, serialize=False, verbose_name='ID')),
                ('donation_amount', models.DecimalField(decimal_places=2, max_digits=10)),
                ('card_number', models.CharField(max_length=16)),
                ('expiry_date', models.DateField()),
                ('cvv', models.CharField(max_length=4)),
                ('card_type', models.CharField(max_length=10)),
                ('is_completed', models.BooleanField(default=False)),
                ('donor', models.ForeignKey(on_delete=django.db.models.deletion.CASCADE, to='api.user')),
                ('food_item', models.ForeignKey(on_delete=django.db.models.deletion.CASCADE, to='api.fooditem')),
            ],
        ),
    ]