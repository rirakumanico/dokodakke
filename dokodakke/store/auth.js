

export const state = () => ({
  username: '',
    isLoggedIn: false
})

export const getters = () => ({
  username: state => state.username,
  isLoggedIn: state = > state.isLoggedIn
})

export const mutations = {
  set(state, payload) {
    state.username = payload.user.username
    state.isLoggedIn = true
  },
  clear(state) {
    state.username = ''
    state.isLoggedIn = false
  }
}

export const actions = {
  login(context, payload) {
    rut
  }
}
