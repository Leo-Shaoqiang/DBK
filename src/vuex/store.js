import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

 const store = new Vuex.Store({
  state: {
    user:'',
    isLogin: false,
    token: '', 
  },
  mutations: {
    login (state,payload){
      state.user += payload;
      state.isLogin = true;         
      sessionStorage.setItem('userName',state.user); 
      state.token = state.user;
    },
    logout(state){
      state.user = '';
      state.isLogin = false;
      sessionStorage.removeItem('userName');
    },
  },
  actions: {
    login(context,payload){
      context.commit('login',payload)
    },
    logout(context){
      context.commit('logout')
    },
  }
})
export default  store;