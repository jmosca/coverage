import time

import requests
from django.shortcuts import render
from rest_framework.response import Response
from rest_framework.views import APIView


class CoverageView(APIView):
    def get(self, request, zip: int):
        coverage = zip % 2 == 0
        time.sleep(2)
        return Response({"coverage": coverage})