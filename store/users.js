const baseUrl = 'http://0.0.0.0:8001/user'

export const state = () => ({
  list: [],
})

export const getters = {
  list: (state) => {
    return state.list
  },
  getById: (state) => (id) => {
    if (state.list.length === 0) {
      this.dispatch('fetchList')
    }
    return state.list.filter((item) => item.id === Number(id))[0]
  },
}

export const mutations = {
  setList(state, data) {
    state.list = data
  },
  create(state, data) {
    state.list.push(data)
  },
  update(state, data) {
    state.list.forEach((item, index) => {
      if (item.id === Number(data.id)) {
        state.list.splice(index, 1, data)
      }
    })
  },
  delete(state, id) {
    state.list.forEach((item, index) => {
      if (item.id === Number(id)) {
        state.list.splice(index, 1)
      }
    })
  },
  login(state, data) {
    state.list.forEach((item, index) => {
      if (item.id === Number(data.id)) {
        state.list.splice(index, 1, data)
      }
    })
  },
}

export const actions = {
  async fetchList({ commit }) {
    const response = await this.$axios.$get(baseUrl).catch((err) => {
      throw err
    })
    commit('setList', response)
  },
  async create({ commit }, item) {
    const response = await this.$axios
      .$post(`${baseUrl}/create`, item)
      .catch((err) => {
        throw err
      })
    commit('create', response)
  },
  async update({ commit }, item) {
    const response = await this.$axios
      .$put(`${baseUrl}/${item.id}`, item)
      .catch((err) => {
        throw err
      })
    commit('update', response)
  },
  async delete({ commit }, id) {
    await this.$axios.$delete(`${baseUrl}/${id}`).catch((err) => {
      throw err
    })
    commit('delete', id)
  },
  async login({ commit }, item) {
    await this.$axios.$post(`http://0.0.0.0:8001/user/login`, item).catch((err) => {
      throw err
    })
    commit('login', item)
  }
}
