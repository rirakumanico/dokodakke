from rest_framework import viewsets

# GET等のみ認証不要とするモジュール
from rest_framework.permissions import IsAuthenticatedOrReadOnly

# すべてのAPIアクセスに認証を必要とするモジュール
# from rest_framework.permissions import IsAuthenticated

from .models import Dokodakke
from .serializers import DokodakkeSerializer

class DokodakkeViewSet(viewsets.ModelViewSet):

    queryset = Dokodakke.objects.all()
    serializer_class = DokodakkeSerializer

    # GET等のみ認証不要とする設定
    permission_classes = [IsAuthenticatedOrReadOnly]

    # すべてのAPIアクセスに認証を必要とする設定
    # permission_classes = [IsAuthenticated]


