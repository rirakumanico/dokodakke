<template>
    <v-card width="400" class="mx-auto mt-5">
      <v-card-title>
        <h1 class="display-1">{{ formTitle }}</h1>
      </v-card-title>
      <v-card-text>
        <v-form>
          <v-text-field
            label="item"
            hint="モノを入力する（例：鍵、リップクリーム、借りてたCD）"
            prepend-icon=""
            v-model="editedItem.item_name"
          />
          <v-text-field
            label="片付けた場所"
            hint="itemを片付けた場所を入力する"
            v-model="editedItem.item_place"
          />
          <v-text-field
            label="備考"
            hint="その他記憶の参考になるコメントを残します"
            v-model="editedItem.item_remarks"
          />
        </v-form>
      </v-card-text>
      <v-card-actions>
        <v-btn
          color="info"
          @click="save(editedItem)"
        >
          {{ saveTitle }}
        </v-btn>
        <v-spacer/>
        <v-btn
          color="alert"
          @click="close"
        >
          閉じる
        </v-btn>
      </v-card-actions>
    </v-card>
</template>

<script>
export default {
  data: () => ({

    // 新規追加または編集データをv-modelで保持
    editedItem: {
      id: '',
      item_name: '',
      item_place: '',
      item_remarks: ''
    },

    // データテーブルの編集対象行データを保持
    editedIndex: ''
  }),
  mounted: function() {
    // インスタンス読み込み時に、this.editedIndexに値を渡す（vuexにはindexでボタンクリック時に保持されている）
    this.editedIndex = this.$store.state.editedIndex

    // （新規追加でなく）既存データの編集の場合、v-modelデータに編集元データを渡す
    if (this.editedIndex > -1) {
      this.editedItem.id = this.$store.state.dokodakke_items[this.editedIndex].id
      this.editedItem.item_name = this.$store.state.dokodakke_items[this.editedIndex].item_name
      this.editedItem.item_place = this.$store.state.dokodakke_items[this.editedIndex].item_place
      this.editedItem.item_remarks = this.$store.state.dokodakke_items[this.editedIndex].item_remarks
    }
  },
  computed: {
    // 後で消すここから
    hensu: function() {
      return this.$store.state.editedIndex
    },
    // 後で消すここまで
    formTitle() {
      return this.editedIndex === -1 ? '新規追加' : '既存データ更新'
    },
    saveTitle() {
      return this.editedIndex === -1 ? '新規追加': '更新'
    },
  },
  methods: {
    //
    save(editedItem) {
      const payloadItem = editedItem
      this.$store.dispatch('save', payloadItem)
    },
    close() {
      this.$router.push('/')
    }
  },

}
</script>
