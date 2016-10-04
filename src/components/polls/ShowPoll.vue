<template>
  <div class="demo-card-wide mdl-card mdl-shadow--2dp">
    <div class="mdl-card__title">
      <h2 class="mdl-card__title-text"></h2>
    </div>
    <div class="mdl-card__supporting-text">
      Lorem ipsum dolor sit amet, consectetur adipiscing elit.
      Mauris sagittis pellentesque lacus eleifend lacinia...
    </div>
    <div class="mdl-card__actions mdl-card--border">
      <a class="mdl-button mdl-button--colored mdl-js-button mdl-js-ripple-effect">
        Get Started
      </a>
    </div>
    <div class="mdl-card__menu">
      <button class="mdl-button mdl-button--icon mdl-js-button mdl-js-ripple-effect">
        <i class="material-icons">share</i>
      </button>
    </div>
  </div>
</template>

<script>
export default {
  created () {
    this.$store.dispatch('getPoll', this.$store.state.route.params.id - 1)
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
