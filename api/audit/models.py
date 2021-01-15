from django.db import models
from accounts.models import User

# Create your models here.
class Audit(models.Model):
    author = models.ForeignKey(User, on_delete = models.CASCADE)
    url = models.URLField(null = False, blank = False)
    audit = models.JSONField(null = True, blank = True)
    publish_date = models.DateTimeField(auto_now_add = True)

    def __str__(self):
        return self.url

    class Meta:
        verbose_name = 'Audit'
        verbose_name_plural = 'Audit'
