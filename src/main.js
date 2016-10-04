// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import store from './store/store'
import VueRouter from 'vue-router'
import App from './App.vue'
import PollForm from './components/polls/PollForm'
import ShowPoll from './components/polls/ShowPoll'
import { sync } from 'vuex-router-sync'

Vue.use(VueRouter)

const router = new VueRouter({
  mode: 'history',
  base: __dirname,
  routes: [
    { path: '/', component: PollForm },
    { path: '/polls/:id', component: ShowPoll }
  ]
})

sync(store, router)

/* eslint-disable no-new */
new Vue({
  store,
  router,
  render: h => h(App)
}).$mount('#app')
