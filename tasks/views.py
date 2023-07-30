from django.shortcuts import render
from rest_framework import viewsets
from .serializer import TaskSerializer
from .models import tasks
# Create your views here.

class TaskView(viewsets.ModelViewSet):
    queryset = tasks.objects.all()
    serializer_class = TaskSerializer




