from rest_framework import serializers

from .models import Dokodakke

class DokodakkeSerializer(serializers.ModelSerializer):

    class Meta:
        model = Dokodakke
        fields = ['id', 'item_name', 'item_place', 'item_remarks']


