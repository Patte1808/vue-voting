import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    polls: [],
    newPoll: {title: '', answers: ['']}
  },
  mutations: {
    ADD_POLL (state) {
      state.polls.push(state.newPoll)
    },
    ADD_POLL_ANSWER (state) {
      state.newPoll.answers.push('')
    },
    UPDATE_POLL_ANSWER (state, answer) {
      const {id, title} = answer
      state.newPoll.answers[id] = title
    },
    UPDATE_POLL_TITLE (state, title) {
      state.newPoll.title = title
    }
  },
  actions: {
    addPoll ({commit}) {
      commit('ADD_POLL')
    },
    addPollAnswer ({commit}) {
      commit('ADD_POLL_ANSWER')
    },
    updatePollAnswer ({commit}, answer) {
      commit('UPDATE_POLL_ANSWER', answer)
    },
    updatePollTitle ({commit}, title) {
      commit('UPDATE_POLL_TITLE', title)
    }
  },
  getters: {
    newTodo: state => state.newPoll,
    polls: state => state.polls
  }
})
