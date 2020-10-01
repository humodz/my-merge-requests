import Vue from 'vue';

import { Main } from './components/Main';

new Vue({
  el: '#app',
  render(h) {
    return h(Main);
  },
});
