// store/index.js
import { createStore } from 'vuex';

export default createStore({
  state: {
    isDarkMode: false
  },
  mutations: {
    toggleDarkMode(state) {
      state.isDarkMode = !state.isDarkMode;
    }
  }
});