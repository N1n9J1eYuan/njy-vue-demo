const state = {
  age: 55
}

const mutations = {
  CHANGEAGE: (state, age) => {
    state.age = age
  }
}

const actions = {
  changeAge ({ commit }, age) {
    commit('SAVENAME', age)
  }
}
export default {
  namespaced: true,
  state,
  mutations,
  actions
}
