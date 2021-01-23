from rest_framework import serializers
from updates.models import Update

class SearchSerializer(serializers.Serializer):
    searchQuery = serializers.CharField(max_length = 200, min_length = None, allow_blank = False)

class UpdateSerializer(serializers.ModelSerializer):
    update = serializers.CharField(read_only = True)

    class Meta:
        model = Update
        fields = [
            'id',
            'update'
            ]
