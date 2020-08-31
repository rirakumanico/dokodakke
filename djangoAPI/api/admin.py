from django.contrib import admin
from .models import Dokodakke

class DokodakkeModelAdmin(admin.ModelAdmin):
    list_display = ('id', 'item_name', 'item_place', 'item_remarks', 'created_at')
    ordering = ('-created_at',)

admin.site.register(Dokodakke, DokodakkeModelAdmin)
