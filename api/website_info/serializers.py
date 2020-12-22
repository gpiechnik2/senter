from rest_framework import serializers

class WebsiteInfoSerializer(serializers.Serializer):
    url = serializers.URLField(max_length = 200, min_length = None, allow_blank = False)
