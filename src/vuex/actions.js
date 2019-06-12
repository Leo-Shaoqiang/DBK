
export function login(context,payload) {

    context.commit('login', payload)
    
}
export function logout(context) {
    context.commit('logout')
}
export function SET_MSG(state, sear) {
    console.log('获取', state.sear)
    store.commit("SET_MSG", sear)
}
