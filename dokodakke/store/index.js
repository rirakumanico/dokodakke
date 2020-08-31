
export const state = () => ({
  editedIndex: '',
  counter: 5,
  dokodakke_items: []
})

export const mutations = {
  setData(state, res) {
    state.dokodakke_items = res
  },
  pushIndex(state, payload) {
    state.editedIndex = payload
  },
  delete(state, item) {
    state.dokodakke_items = item
  }
}

export const actions = {
  async save(context, payload) {
    if (this.state.editedIndex > -1) {
      await this.$axios.$put('http://127.0.0.1:8000/api/v1/dokodakke/' + payload.id + '/', {
          'item_name': payload.item_name,
          'item_place': payload.item_place,
          'item_remarks': payload.item_remarks
        })
      this.$router.push('/')
    }
    else {
      await this.$axios.$post('http://127.0.0.1:8000/api/v1/dokodakke/', {
        'item_name': payload.item_name,
        'item_place': payload.item_place,
        'item_remarks': payload.item_remarks
      })
      this.$router.push('/')
    }
  },
  async getData({ commit }) {
    const res = await this.$axios.$get('http://127.0.0.1:8000/api/v1/dokodakke/')
    commit("setData", res)
  },
  async deleteItem(context, id) {
    await this.$axios.$delete('http://127.0.0.1:8000/api/v1/dokodakke/' + id.id)
    const res = await this.$axios.$get('http://127.0.0.1:8000/api/v1/dokodakke/')
    context.commit("setData", res)

  },
  pushIndex(context, payload) {
    context.commit("pushIndex", payload)
  }
}
