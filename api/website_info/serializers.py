from rest_framework import serializers
#from accounts.models import User

class WebsiteInfoSerializer(serializers.Serializer):
    url = serializers.URLField(max_length = 200, min_length = None, allow_blank = False)
