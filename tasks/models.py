from django.db import models

# Create your models here.
class tasks(models.Model):
    class Meta:
        ordering = ("title",)

    def __str__(self):
        return self.title

    title = models.CharField(max_length=250)
    description = models.TextField(blank=True)
    done = models.BooleanField(default=False)
