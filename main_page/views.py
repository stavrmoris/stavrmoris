from django.shortcuts import render
from .models import Post

def post_list(request):
    posts = Post.objects.all().order_by('-date')
    return render(request, 'index.html', {'posts': posts})

def calc(request):
    return render(request, 'calc.html')

def todo(request):
    return render(request, 'todo.html')