from rest_framework import serializers
from . models import tasks
class TaskSerializer(serializers.ModelSerializer):
    class Meta:
        fields = ("id","title","description","done")
        model = tasks

