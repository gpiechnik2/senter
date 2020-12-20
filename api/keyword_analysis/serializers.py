from rest_framework import serializers
#from accounts.models import User

class KeywordAnalysisSerializer(serializers.Serializer):
    keyword = serializers.CharField(max_length = 40)
