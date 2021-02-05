import Vue from 'vue'
import Vuex from 'vuex'
// import db from '@/list.json'
// import descr from '@/des.json'

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    srcData: [],
    currentArr: [],
    srcArrs: {
      sortReg: {
        status: true,
        arr: null,
        // arr: db,
      },
      sortName: {
        status: false,
        arr: []
      },
      search: {
        status: false,
        arr: []
      }
    },
    srcDescr: null,
    // srcDescr: descr,
    descrItem: null,
    // descrItem: descr[0],
    step: 30,
    lenSrcData: 0,
    isName: false,
    isReg: false,
    baseUrl: 'http://y95386mz.beget.tech/lib_rus/'
  },
  mutations: {
    toggleStatus(state, name) {
      for(let key in state.srcArrs) {
        if(key == name) {
          state.srcArrs[key].status = true;
          state.currentArr = state.srcArrs[key].arr.filter(el => el);
        }
        else {
          state.srcArrs[key].status = false;
        }
      }
    },
    toggleIsName(state) {
      state.isName = true;
      setTimeout(() => state.isName = false, 1000);
    },
    toggleIsReg(state) {
      state.isReg = true;
      setTimeout(() => state.isReg = false, 1000);
    },
    setCurrentArr(state, arr) {
      state.currentArr = arr.filter(el => el);
    },
    setSortReg(state, arr) {
      state.srcArrs.sortReg.arr = arr.filter(el => el);
    },
    setData(state, len) {
      state.srcData = state.currentArr.filter((el, i) => i < len);
    },
    setDescr(state, arr) {
      state.srcDescr = arr;
    },
    clearLenSrcData(state) {
      state.lenSrcData = 0;
    },
    setLenSrcData(state, step = state.step) {
      state.lenSrcData += step;
    },
    runUpDataSortName(state, arr) {
      function byName() {
        return (a, b) => a.name.trim() > b.name.trim() ? 1 : -1;
      }
      state.srcArrs.sortName.arr = arr.filter(el => el);
      state.srcArrs.sortName.arr.sort(byName());
    },
    setDescrItem(state, obj) {
      state.descrItem = obj;
    }
  },
  actions: {
    fetchStartData({ commit }) {
      return fetch(this.state.baseUrl + 'list.json')
      .then(res => res.json())
      .then(req => {
        commit('setSortReg', req);
        commit('setCurrentArr', req);
        commit('setLenSrcData', this.state.step);
        commit('setData', this.state.lenSrcData);
        commit('runUpDataSortName', req);
      })
    },
    fetchDescriptions({ commit }) {
      return fetch(this.state.baseUrl + 'des.json')
      .then(res => res.json())
      .then(req => {
        commit('setDescr', req);
        commit('setDescrItem', req[0]);
      })
    }
  },
  modules: {
  }
})
