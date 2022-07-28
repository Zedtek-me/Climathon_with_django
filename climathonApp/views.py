from django.shortcuts import render, redirect

# Create your views here.
def render_login(request):
    return render(request, 'login.html', {})

def render_signup(request):
    return render(request, 'signup.html', {})

def render_dashboard(request):
    if request.method == 'POST' and request.headers.get('user_logged_in'):# this gets the initial request that sends user login status through post, and the redirect as dimmed fit.
        print(request.headers.get('user_logged_in')) #prints to confirm log in
        return render(request, 'dashboard.html', {})
    return redirect('login')        