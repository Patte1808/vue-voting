import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    polls: [],
    newPoll: {title: '', answers: ['']},
    currentPoll: {}
  },
  mutations: {
    ADD_POLL (state) {
      let tmpAnswers = state.newPoll.answers
      for (let i = 0; i < tmpAnswers.length; i++) {
        if (tmpAnswers[i] === '') {
          tmpAnswers.splice(i, 1)
        }
      }
      state.newPoll.answers = tmpAnswers
      state.polls.push(state.newPoll)
    },
    ADD_POLL_ANSWER (state) {
      state.newPoll.answers.push('')
    },
    UPDATE_POLL_ANSWER (state, answer) {
      const {id, value} = answer
      state.newPoll.answers[id] = value
    },
    UPDATE_POLL_TITLE (state, title) {
      state.newPoll.title = title
    },
    GET_POLL (state, id) {
      console.log(JSON.stringify(state))
      console.log(`Setting poll to ${state.polls[parseInt(id)]} with id ${id}`)
      state.currentPoll = state.polls[parseInt(id)]
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
    },
    getPoll ({commit}, id) {
      commit('GET_POLL', id)
    }
  },
  getters: {
    newPoll: state => state.newPoll,
    polls: state => state.polls,
    currentPoll: state => state.currentPoll
  }
})
