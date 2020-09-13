import Vue from 'vue'
import App from './App.vue'
import vueRouter from 'vue-router';
import {routes} from './routes'
import panel from './projects/Panel.vue';
import button from './projects/Buttons.vue'

Vue.use(vueRouter);

Vue.component('xotb-panel', panel)
Vue.component('xotb-button', button)

const router = new vueRouter({
  routes
})

new Vue({
  el: '#app',
  router,
  render: h => h(App)
})
