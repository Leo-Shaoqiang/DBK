export function login(context, payload) {
    context.commit('login', payload)
    this.axios.get('/users/checkCookie',{withCredentials: true})
    .then((res)=>{ this.state.user  = res.data.userName;
    })
}
export function logout(context) {
    context.commit('logout')
}