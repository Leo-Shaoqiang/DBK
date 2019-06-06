import Vue from 'vue'
import Vuex from 'vuex'
import * as actions from './actions'
import * as mutations from './mutations'
import * as getters from './getters'

Vue.use(Vuex)

 const store = new Vuex.Store({
  state: {
    sear:"",
    user:'',
    isLogin: false,
    token: '', 
  },
  mutations,
  actions,
  getters
})
export default  store;