from django.contrib import admin
from .models import Post, Hashtag
from django import forms

class PostForm(forms.ModelForm):
    class Meta:
        model = Post
        fields = '__all__'
        widgets = {
            'date': forms.DateInput(attrs={'type': 'date'})  # Виджет календаря
        }

@admin.register(Post)
class PostAdmin(admin.ModelAdmin):
    form = PostForm
    list_display = ('title', 'date', 'link')
    filter_horizontal = ('hashtags',)

@admin.register(Hashtag)
class HashtagAdmin(admin.ModelAdmin):
    list_display = ('name',)
