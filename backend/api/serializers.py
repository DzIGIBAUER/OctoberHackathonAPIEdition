from rest_framework_json_api.relations import ResourceRelatedField
from rest_framework_json_api.serializers import HyperlinkedModelSerializer


from api.models import Company, Advocate, Link


class CompanySerializer(HyperlinkedModelSerializer):
    class Meta:
        model = Company
        fields = ('name', 'logo', 'summary', 'advocates', 'url')
    
    advocates = ResourceRelatedField(
        model=Advocate,
        queryset=Advocate.objects,
        self_link_view_name='company-relationships',
        related_link_view_name='company-related',
        many=True
    )
    
    related_serializers = {
        'advocates': 'api.serializers.AdvocateSerializer'
    }


class AdvocateSerializer(HyperlinkedModelSerializer):
    class Meta:
        model = Advocate
        fields = ('name', 'short_bio', 'long_bio', 'advocate_years_exp', 'company', 'url')
    
    company = ResourceRelatedField(
        model=Company,
        queryset=Company.objects,
        self_link_view_name='advocate-relationships',
        related_link_view_name='advocate-related',
    )

    related_serializers = {
        'company': 'api.serializers.CompanySerializer'
    }



class LinkSerializer(HyperlinkedModelSerializer):
    class Meta:
        model = Link
        fields = Link._fields
