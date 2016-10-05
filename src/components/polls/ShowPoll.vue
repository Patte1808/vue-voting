<template>
  <div class="demo-card-wide mdl-card mdl-shadow--2dp">
    <div class="mdl-card__title">
      <h2 class="mdl-card__title-text">{{title}}</h2>
    </div>
    <div class="mdl-card__supporting-text">
      <div v-for="(answer, index) in answers">
        <label class="mdl-radio mdl-js-radio mdl-js-ripple-effect" :for="index">
          <input type="radio" class="mdl-radio__button" name="answers" :value="answer" :id="index">
          <span class="mdl-radio__label">{{answer}}</span>
        </label>
      </div>
    </div>
    <div class="mdl-card__actions mdl-card--border">
      <a class="mdl-button mdl-button--colored mdl-js-button mdl-js-ripple-effect">
        Vote
      </a>
    </div>
  </div>
</template>

<script>
export default {
  created () {
    this.$store.dispatch('getPoll', parseInt(this.$store.state.route.params.id - 1))
  },
  methods: {
  },
  computed: {
    title () {
      return this.$store.getters.currentPoll.title
    },
    answers () {
      return this.$store.getters.currentPoll.answers
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
