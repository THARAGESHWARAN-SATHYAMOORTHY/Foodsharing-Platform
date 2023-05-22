from rest_framework import serializers
from .models import User, FoodItem, Donation


class UserSerializer(serializers.ModelSerializer):
    class Meta:
        model = User
        fields = "__all__"


class FoodItemSerializer(serializers.ModelSerializer):
    class Meta:
        model = FoodItem
        fields = "__all__"


class DonationSerializer(serializers.ModelSerializer):
    donor = UserSerializer()
    food_item = FoodItemSerializer()

    class Meta:
        model = Donation
        fields = "__all__"
