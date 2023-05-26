from django.urls import path

from .views import CoverageView

urlpatterns = [
    path('coverage/<int:zip>', CoverageView.as_view(), name='coverage'),
]