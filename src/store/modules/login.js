const state = {
  userInfo: {}
}

const mutations = {
  SAVEUSERINFO (state, userInfo) {
    state.userInfo = userInfo
  }
}

const actions = {
  saveUserInfo ({ commit }, userInfo) {
    commit('SAVEUSERINFO', userInfo)
  }
}
export default {
  namespaced: true,
  state,
  mutations,
  actions
}
