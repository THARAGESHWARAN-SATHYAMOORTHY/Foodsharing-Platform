from django.db import models


class User(models.Model):
    name = models.CharField(max_length=200)
    email = models.EmailField(unique=True)

    def __str__(self):
        return self.name


class FoodItem(models.Model):
    name = models.CharField(max_length=200)
    description = models.TextField()
    quantity = models.PositiveIntegerField(default=0)  # Added field for quantity

    def __str__(self):
        return self.name


class Donation(models.Model):
    donor = models.ForeignKey(User, on_delete=models.CASCADE)
    food_item = models.ForeignKey(FoodItem, on_delete=models.CASCADE)
    donation_amount = models.DecimalField(
        max_digits=10, decimal_places=2
    )  # Added field for donation amount
    card_number = models.CharField(max_length=16)  # Added field for card number
    expiry_date = models.DateField()  # Added field for card expiry date
    cvv = models.CharField(max_length=4)  # Added field for CVV
    card_type = models.CharField(max_length=10)  # Added field for card type
    is_completed = models.BooleanField(default=False)

    def __str__(self):
        return f"Donation #{self.id}"
