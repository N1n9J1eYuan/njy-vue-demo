const state = {
  name: '888'
}

const mutations = {
  SAVENAME: (state, name) => {
    state.name = name
  }
}

const actions = {
  saveName ({ commit }, name) {
    commit('SAVENAME', name)
  }
}
export default {
  namespaced: true,
  state,
  mutations,
  actions
}
