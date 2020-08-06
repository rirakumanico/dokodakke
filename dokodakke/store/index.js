import axios from 'axios'



export const state = () => ({
  editedIndex: '',
  counter: 5,
  dokodakke_items: []
  // dokodakke_items: [
  //   {
  //     item_name: '帽子',
  //     item_place: '玄関横の棚の中',
  //     item_remarks: 'ロコンドで買ったいい帽子'
  //   },
  //   {
  //     item_name: '鍵',
  //     item_place: '机の右のポケット',
  //     item_remarks: '自宅の鍵'
  //   },
  //   {
  //     item_name: '帽子',
  //     item_place: '玄関横の棚の中',
  //     item_remarks: 'ロコンドで買ったいい帽子'
  //   },
  //   {
  //     item_name: '鍵',
  //     item_place: '机の右のポケット',
  //     item_remarks: '自宅の鍵'
  //   },
  //   {
  //     item_name: '帽子',
  //     item_place: '玄関横の棚の中',
  //     item_remarks: 'ロコンドで買ったいい帽子'
  //   },
  //   {
  //     item_name: '鍵',
  //     item_place: '机の右のポケット',
  //     item_remarks: '自宅の鍵'
  //   },
  //   {
  //     item_name: '帽子',
  //     item_place: '玄関横の棚の中',
  //     item_remarks: 'ロコンドで買ったいい帽子'
  //   },
  //   {
  //     item_name: '鍵',
  //     item_place: '机の右のポケット',
  //     item_remarks: '自宅の鍵'
  //   },
  //   {
  //     item_name: '帽子',
  //     item_place: '玄関横の棚の中',
  //     item_remarks: 'ロコンドで買ったいい帽子'
  //   },
  //   {
  //     item_name: '鍵',
  //     item_place: '机の右のポケット',
  //     item_remarks: '自宅の鍵'
  //   },
  //   {
  //     item_name: '帽子',
  //     item_place: '玄関横の棚の中',
  //     item_remarks: 'ロコンドで買ったいい帽子'
  //   },
  //   {
  //     item_name: '鍵',
  //     item_place: '机の右のポケット',
  //     item_remarks: '自宅の鍵'
  //   },
  // ]
})

export const mutations = {

  // dokodakke_itemsのデータを更新（actionsでAPIから取得するデータを格納）
  setData(state, dokodakke_items) {
    state.dokodakke_items = dokodakke_items
  },

  // editedIndexの値変更
  pushIndex(state, editedIndex) {
    state.editedIndex = editedIndex
  },

  // データ保存
  save(state, editedItem) {
    if (state.editedIndex > -1) {
      Object.assign(state.dokodakke_items[state.editedIndex], editedItem)
    }
    else {
      // this.dokodakke_items.push(this.editedItem)
      // this.$store.state.dokodakke_items.push(this.editedItem)
      state.dokodakke_items.push(editedItem)
    }
  },

  // データ削除
  delete(state, index) {
    // const index = state.dokodakke_items.indexOf(item)
    confirm('選択したデータを削除しますが宜しいですか？') && state.dokodakke_items.splice(index, 1)
  }
}

export const actions = {
  async getData({ commit }) {
    const res = await this.$axios.$get('http://127.0.0.1:8000/api/v1/dokodakke/')
    // const res = await this.$axios.$get('https://qiita.com/api/v2/items')
    console.log(res)
    commit("setData", res)
  }
}
