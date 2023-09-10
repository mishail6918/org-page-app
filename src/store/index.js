import { createStore } from 'vuex'

export default createStore({
  state: {
    org: JSON.parse(localStorage.getItem('org') || '[]')
  },
  getters: {
    org: state => {
      return state.org;
    },
  },
  mutations: {
    createOrg(state, org) {
      state.org = org;
      localStorage.setItem('org', JSON.stringify(this.state.org));
    }
  },
  actions: {
    createOrg({commit}, org) {
      commit('createOrg', org)
    },
  },
  modules: {
  }
})
