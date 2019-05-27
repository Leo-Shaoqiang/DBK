//登录
  export function login (state,payload){
    state.user += payload;
    state.isLogin = true;         
    state.token = state.user;
  }
  //登出
 export  function logout(state){
    state.user = '';
    state.isLogin = false;
    state.token = '';
  }
 


