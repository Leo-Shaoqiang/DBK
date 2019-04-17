import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

 const store = new Vuex.Store({
  state: {
    User:'',
  },
  mutations: {
login (state,payload){
  state.User += payload;
},
logout(state){
  state.User = '';
}
  },
  actions: {
  }
})
export default  store;