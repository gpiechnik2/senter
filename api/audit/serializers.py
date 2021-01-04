from rest_framework import serializers

class AuditSerializer(serializers.Serializer):
    url = serializers.URLField(max_length = 200, min_length = None, allow_blank = False)
