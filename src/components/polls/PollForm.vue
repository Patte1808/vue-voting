<template>
  <div class="mdl-grid">
    <div class="mdl-layout-spacer"></div>
    <div class="mdl-cell mdl-cell--4-col">
      <form>
        <div class="mdl-textfield mdl-js-textfield">
          <input class="mdl-textfield__input" type="text" :value="title" @input="updatePollTitle">
          <label class="mdl-textfield__label" for="sample1">Poll title</label>
        </div>

        <div v-for="(answer, index) in answers">
          <div class="mdl-textfield mdl-js-textfield">
            <input class="mdl-textfield__input" type="text" :id="index" :value="answer" @input="updatePollAnswer" v-on:keyup="addPollAnswer">
            <label class="mdl-textfield__label" :for="index">Vote option</label>
          </div>
        </div>
        <button class="mdl-button mdl-js-button mdl-button--raised mdl-button--colored" @click="savePoll">
          Save poll
        </button>
      </form>
    </div>
    <div class="mdl-layout-spacer"></div>
  </div>
</template>

<script>
export default {
  methods: {
    updatePollTitle (e) {
      this.$store.dispatch('updatePollTitle', e.target.value)
    },
    addPollAnswer (e) {
      if (parseInt(e.target.id) === this.$store.getters.newPoll.answers.length - 1) {
        this.$store.dispatch('addPollAnswer')
      }
    },
    updatePollAnswer (e) {
      const {id, value} = e.target
      this.$store.dispatch('updatePollAnswer', {id, value})
    },
    savePoll () {
      this.$store.dispatch('addPoll')
    }
  },
  computed: {
    title () {
      return this.$store.getters.newPoll.title
    },
    answers () {
      return this.$store.getters.newPoll.answers
    },
    answersCount () {
      return this.$store.getters.newPoll.answers.length
    }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
h1 {
  color: #42b983;
}
</style>
