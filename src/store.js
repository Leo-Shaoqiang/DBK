import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

 const store = new Vuex.Store({
  state: {
    User:undefined,
  },
  mutations: {
login (state,payload){
  state.User += payload;
},
logout(state){
  state.User = undefined;
}
  },
  actions: {
  }
})
export default  store;