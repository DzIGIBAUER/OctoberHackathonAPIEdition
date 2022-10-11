from django.db import models


class Advocate(models.Model):
    name = models.CharField(max_length=50)
    profile_image = models.ImageField(upload_to='profile_images')
    short_bio = models.CharField(max_length=150)
    long_bio = models.TextField()
    advocate_years_exp = models.PositiveSmallIntegerField(default=0)
    company = models.ForeignKey('Company', models.SET_DEFAULT, related_name='advocates', default=None)


class Company(models.Model):
    name = models.CharField(max_length=50, unique=True)
    logo = models.ImageField(upload_to='company_logos')
    summary = models.TextField()


class Link(models.Model):
    advocate = models.OneToOneField(Advocate, models.CASCADE)
    _fields = ['youtube', 'github', 'twitter'] # run migration after change!


for field_name in Link._fields:
    Link.add_to_class(field_name, models.URLField(blank=True))