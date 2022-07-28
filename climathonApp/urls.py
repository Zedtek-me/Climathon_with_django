from importlib.resources import path
from django.urls import path
from .views import *
urlpatterns =[
    path('', render_login, name='login'),
    path('signup/', render_signup, name='signup'),
    path('dashboard/', render_dashboard, name='dashboard')
]