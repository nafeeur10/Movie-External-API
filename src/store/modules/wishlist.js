const state = {
  list: []
}

const mutations = {
    SET_LIST: (state, list) => {
      state.list = list
    }
}

const actions = {
    setWishList({ commit }) {
        let wishlist = JSON.parse(localStorage.getItem("wishlist"))
        commit('SET_LIST', wishlist)
    },
}

export default {
    state,
    mutations,
    actions
}