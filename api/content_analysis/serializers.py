from rest_framework import serializers
from .models import ContentAnalysis
from accounts.models import User
from rest_framework.response import Response
from rest_framework import status

class ContentAnalysisSerializer(serializers.ModelSerializer):

    text_to_check = serializers.CharField(allow_null = True, default = None, allow_blank = True)
    keyword = serializers.CharField(allow_null = True, default = None, allow_blank = True)
    page_title = serializers.CharField(allow_null = True, default = None, allow_blank = True)
    meta_description = serializers.CharField(allow_null = True, default = None, allow_blank = True)

    class Meta:
        model = ContentAnalysis
        fields = [
            'id',
            'text_to_check',
            'keyword',
            'page_title',
            'meta_description']

    def create(self, request):
        
        user = self.context['request'].user
        text_to_check = request['text_to_check']
        keyword = request['keyword']
        page_title = request['page_title']
        meta_description = request['meta_description']

        analysis = ContentAnalysis.objects.create(
            author = user,
            text_to_check = text_to_check,
            keyword = keyword,
            page_title = page_title,
            meta_description = meta_description)

        return analysis

    def update(self, instance, validated_data):

        user = self.context['request'].user

        if instance.author != user:
            return Response(serializer.errors, status = status.HTTP_401_UNAUTHORIZED)

        instance.text_to_check = validated_data.get('text_to_check')
        instance.keyword = validated_data.get('keyword')
        instance.page_title = validated_data.get('page_title')
        instance.meta_description = validated_data.get('meta_description')

        instance.save()

        return instance
