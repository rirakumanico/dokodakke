from rest_framework import viewsets
# from rest_framework.permissions import IsAuthenticatedOrReadOnly

from .models import Dokodakke
from .serializers import DokodakkeSerializer

class DokodakkeViewSet(viewsets.ModelViewSet):

    queryset = Dokodakke.objects.all()
    serializer_class = DokodakkeSerializer
    # permission_classes = [IsAuthenticatedOrReadOnly]


