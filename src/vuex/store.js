import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

const state = {
  json: '""',
  error: false
}

const mutations = {
  UPDATE_JSON (state, json) {
    state.json = json
  },
  UPDATE_ERROR (state, error) {
    state.error = error
  }
}

export default new Vuex.Store({
  state,
  mutations
})
