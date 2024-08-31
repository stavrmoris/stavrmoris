from django.db import models

class Hashtag(models.Model):
    name = models.CharField(max_length=50, unique=True)

    def __str__(self):
        return self.name

class Post(models.Model):
    title = models.CharField(max_length=200)
    description = models.TextField()
    link = models.URLField()
    date = models.DateField()  # Поле для выбора только даты, без времени
    hashtags = models.ManyToManyField(Hashtag, blank=True)

    def __str__(self):
        return self.title
