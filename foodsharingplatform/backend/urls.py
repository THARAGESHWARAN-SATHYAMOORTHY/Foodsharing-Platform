from django.contrib import admin
from django.urls import path, include
from rest_framework import routers
from api.views import UserViewSet, FoodItemViewSet, DonationViewSet

router = routers.DefaultRouter()
router.register(r'users', UserViewSet)
router.register(r'fooditems', FoodItemViewSet)
router.register(r'donations', DonationViewSet)

urlpatterns = [
    path('admin/', admin.site.urls),
    path('api/', include(router.urls)),
]
