from rest_framework.viewsets import ModelViewSet
from django.utils import timezone

from empApp.models import Employee
from empApp.serializers import EmployeeSerializer


class EmployeeViewSet(ModelViewSet):
    queryset = Employee.objects.all()
    serializer_class = EmployeeSerializer