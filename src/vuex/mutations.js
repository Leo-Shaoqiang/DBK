//登录
  export function login (state,token){
    state.user = token;
    state.isLogin = true;      
    state.token = token;
  }
  //登出
 export  function logout(state){
    state.user = '';
    state.isLogin = false;
    state.token = '';
  }
  export  function SET_MSG(state, sear) {
      state.sear = sear
      console.log('保存', state.sear)
  
    }
   


