from rest_framework_json_api.views import ModelViewSet, RelationshipView
from rest_framework.filters import SearchFilter

from api.models import Company, Advocate
from api.serializers import CompanySerializer, AdvocateSerializer


class CompanyViewSet(ModelViewSet):
    queryset = Company.objects.all()
    serializer_class = CompanySerializer
    search_fields = ('name', 'summary',)


class AdvocateViewSet(ModelViewSet):
    queryset = Advocate.objects.all()
    serializer_class = AdvocateSerializer
    search_fields = ('name', 'short_bio', 'long_bio',)


class CompanyRelationshipView(RelationshipView):
    queryset = Company.objects

class AdvocateRelationshipView(RelationshipView):
    queryset = Advocate.objects