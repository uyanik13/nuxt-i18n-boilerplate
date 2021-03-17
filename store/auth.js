export const MUTATIONS = {
  SET_USER : 'SET_USER',
  REMOVE_USER : 'REMOVE_USER',
}


export const state = () => ({
    user:null
 })

export const mutations = {

  [MUTATIONS.SET_USER](state, user){
   state.user = user
 },
  [MUTATIONS.REMOVE_USER](state){
   state.user = null
 },


}

export const actions = {

  login({ commit }, user) {
    commit(MUTATIONS.SET_USER,user)
  },
  logout({ commit }) {
    commit(MUTATIONS.REMOVE_USER)
  }

}

export const getters = {



}
