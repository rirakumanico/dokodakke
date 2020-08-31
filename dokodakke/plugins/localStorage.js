import createPersistedState from 'vuex-persistedstate'

export default ({ store }) => {
  createPersistedState({
    paths: ['editedIndex'],  // localStorageに保存したいstoreを入れる
  })(store);
};
