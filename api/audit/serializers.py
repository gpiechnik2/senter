from rest_framework import serializers
from rest_framework import serializers
from .models import Audit
from accounts.models import User

class AuditSerializer(serializers.Serializer):
    url = serializers.URLField(max_length = 200, min_length = None, allow_blank = False)

class AuditModelSerializer(serializers.ModelSerializer):
    url = serializers.URLField(max_length = 200, min_length = None, allow_blank = False)
    audit = serializers.JSONField()
    publish_date = serializers.DateTimeField(read_only = True)

    class Meta:
        model = Audit
        fields = [
            'id',
            'url',
            'audit',
            'publish_date']

    def create(self, request):

        user = self.context['request'].user
        url = request['url']
        audit = request['audit']

        newAudit = Audit.objects.create(
            author = user,
            url = url,
            audit = audit
        )

        return newAudit
