from django.db import models

class Update(models.Model):
    update = models.CharField(max_length = 30000)
    publish_date = models.DateTimeField(auto_now_add = True)

    def __str__(self):
        return self.update

    class Meta:
        verbose_name = 'Update'
