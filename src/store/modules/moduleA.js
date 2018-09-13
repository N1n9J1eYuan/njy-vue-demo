const state = {
  name: '888'
}

const mutations = {
  SAVENAME: (state, name) => {
    state.name = name
  }
}

const actions = {
  saveName ({ rootState, commit }, name) {
    console.log(rootState)
    commit('SAVENAME', name)
  }
}
export default {
  namespaced: true,
  state,
  mutations,
  actions
}
