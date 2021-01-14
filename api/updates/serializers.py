from rest_framework import serializers
from .models import Update

class UpdateSerializer(serializers.ModelSerializer):
    update = serializers.CharField(read_only = True)
    publish_date = serializers.DateTimeField(read_only = True)

    class Meta:
        model = Update
        fields = [
            'id',
            'update',
            'publish_date']
