from django.db import models
from accounts.models import User

# Create your models here.
class ContentAnalysis(models.Model):
    author = models.ForeignKey(User, on_delete = models.CASCADE)
    text_to_check = models.TextField(max_length = 15000, blank = True, null = True)
    keyword = models.CharField(max_length = 100, blank = True, null = True)
    page_title = models.TextField(blank = True, null = True)
    meta_description = models.TextField(max_length = 280, blank = True, null = True)
    publish_date = models.DateTimeField(auto_now_add = True)

    def __str__(self):
        return self.keyword

    class Meta:
        verbose_name = 'Content analysis'
        verbose_name_plural = 'Content analysis'
