from rest_framework import serializers

from empApp.models import Employee


class EmployeeSerializer(serializers.HyperlinkedModelSerializer):
    class Meta:
        model = Employee
        fields = ('id','firstName','lastName','emailId')