import Vue from 'vue'
import Vuex from 'vuex'
import * as actions from './actions'
import * as mutations from './mutations'

Vue.use(Vuex)

 const store = new Vuex.Store({
  state: {
    user:'',
    isLogin: false,
    token: '', 
  },
  mutations,
  actions,
})
export default  store;