<template>
  <div>
    <v-btn
      color="info"
      @click="addItem()"
    >
      新規追加
    </v-btn>
    <v-card class="mt-5">
      <v-data-table
        :headers="headers"
        :items="dokodakke_items"
        :items-per-page="20"
        class="elevation-1"
      >
        <template v-slot:item.control="{ item }"> <!-- この{ item }がよく分からない -->
          <v-icon
            small
            class="mr-2"
            @click="editItem(item)"
          >
            mdi-pencil
          </v-icon>
          <v-icon
            small
            @click="deleteItem(item)"
          >
            mdi-delete
          </v-icon>
        </template>
      </v-data-table>
    </v-card>

    <v-btn
      color="info"
      @click="save()"
      class="mt-5"
    >
      saveメソッド
    </v-btn>


  </div>

</template>

<script>
import { mapActions } from 'vuex'

export default {
    // async asyncData({ $axios }) {
    //   // 取得先のURL
    //   const url = "https://qiita.com/api/v2/items";
    //   // リクエスト（Get）
    //   const response = await $axios.$get(url);
    //   // 配列で返ってくるのでJSONにして返却
    //   return {
    //     qiita: response
    //   };
    // async asyncData({ $axios }) {
    //   // 取得先のURL
    //   const url = "http://127.0.0.1:8000/api/v1/dokodakke";
    //   // リクエスト（Get）
    //   const response = await $axios.$get(url);
    //   // 配列で返ってくるのでJSONにして返却
    //   return {
    //     axios_data: response
    //   };
    // },

  data() {
    return {
      // v-bindによるリンクのため、dataにヘッダーを保持
      headers: [
        {
          text: "item",
          value: "item_name"
        },
        {
          text: "置いた場所",
          value: "item_place"
        },
        {
          text: "備考",
          value: "item_remarks"
        },
        {
          text: "Action",
          value: "control"
        }
      ],
    }
  },

  mounted() {
    this.getData()
  },
  computed: {
    dokodakke_items() {
      return this.$store.state.dokodakke_items
    },
  },
  methods: {
    // Vuexに記述されたactionsをmethods定義
    ...mapActions({
      getData: 'getData'
    }),
    // 新規追加ボタンをクリックしたとき（mutations「pushIndex」を呼び出す）
    addItem() {
      const index = -1
      this.$store.commit('pushIndex', index)
      this.$router.push('/edit')
    },
    // 編集アイコンをクリックしたとき
    editItem(item){
      const index = this.dokodakke_items.indexOf(item)

      // 直接mutationsをcommitではなく、actionsを経由するのが正しい方法
      this.$store.dispatch('pushIndex', index)
      this.$router.push('/edit')
    },
    // 削除アイコンでデータを削除
    deleteItem(item) {
      const id = item.id
      const ret = confirm("削除して宜しいですか？")
      if (ret == true) {
        this.$store.dispatch('deleteItem', {id: id})
      }
    },
    save(editedItem) {
      this.$store.commit('save', this.editedItem)
      this.$router.push('/')
    },
  }
}
</script>
