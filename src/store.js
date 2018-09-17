import Vue from 'vue';
import Vuex from 'vuex';

Vue.use(Vuex);

export default new Vuex.Store({
  state: {
    title: 'Darwin Do',
    links: ['http://google.com', 'http://youtube.com', 'http://coursera.com'],
  },
  mutations: {
    ADD_LINK: (state, link) => {
      state.links.push(link);
    },
    REMOVE_LINK: (state, link) => {
      state.links.splice(link, 1);
    },
    REMOVE_ALL: (state) => {
      state.links = [];
    },
  },
  actions: {
    removeLink: ({ commit }, link) => {
      commit('REMOVE_LINK', link);
    },
    removeAll: ({ commit }) =>
      new Promise((resolve, reject) => {
        setTimeout(() => {
          commit('REMOVE_ALL');
          resolve();
        }, 1500);
      }),
  },
  getters: {
    countLinks: state => state.links.length,
  },
});

