const state = {
  tab: 1
}

const mutations = {
  setTab(state, data) {
    state.tab = data
  }
}

const actions = {
}

export default {
  namespaced: true,
  state,
  mutations,
  actions
}

