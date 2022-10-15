from rest_framework_json_api.relations import ResourceRelatedField
from rest_framework_json_api.serializers import HyperlinkedModelSerializer


from api.models import Company, Advocate, Links
from backend.utils.profile_image_gen import generate_profile_image

class LinksSerializer(HyperlinkedModelSerializer):
    class Meta:
        model = Links
        fields = Links._fields


class CompanySerializer(HyperlinkedModelSerializer):
    
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
    
    
    def to_representation(self, instance):
        data = super().to_representation(instance)
        
        if not data.get('logo'):
            data['logo'] = generate_profile_image(data['name'])
        
        return data

    class Meta:
        model = Company
        fields = ('name', 'logo', 'summary', 'advocates', 'url')



class AdvocateSerializer(HyperlinkedModelSerializer):
    company = ResourceRelatedField(
        model=Company,
        queryset=Company.objects,
        self_link_view_name='advocate-relationships',
        related_link_view_name='advocate-related',
    )
    
    links = LinksSerializer()

    related_serializers = {
        'company': 'api.serializers.CompanySerializer'
    }

    class Meta:
        model = Advocate
        fields = ('name', 'profile_image', 'short_bio', 'long_bio', 'advocate_years_exp', 'company', 'links', 'url')
