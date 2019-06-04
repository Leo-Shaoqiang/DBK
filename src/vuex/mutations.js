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
 


