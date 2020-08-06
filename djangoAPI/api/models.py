import uuid

from django.db import models
from django.utils import timezone

class Dokodakke(models.Model):

    class Meta:

        # DBテーブル名称
        db_table = 'dokodakke'

        # モデル名
        verbose_name_plural = 'dokodakkeモデル'

    id = models.UUIDField(primary_key=True, default=uuid.uuid4, editable=False)
    item_name = models.CharField(verbose_name="item", max_length=20)
    item_place = models.CharField(verbose_name="置いた場所", max_length=20)
    item_remarks = models.CharField(verbose_name="備考", max_length=30, null=True)
    updated_at = models.DateField
    # created_at = models.DateTimeField(default=timezone.now)
    created_at = models.DateTimeField(verbose_name='作成日時', auto_now_add=True)

    def __str__(self):
        return self.item_name

