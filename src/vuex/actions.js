
export function login(context,payload) {

    context.commit('login', payload)
    
}
export function logout(context) {
    context.commit('logout')
}