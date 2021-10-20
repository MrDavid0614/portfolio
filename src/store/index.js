import { createStore } from 'vuex'
import { getProjectsFromApi } from '@/api'

const store = createStore({
  state: {
    projects: []
  },
  getters: {
    getProjectById: (state) => (id) => {
      const project = state.projects.find(project => project.id === id)
      return project
    }
  },
  mutations: {
    setProjects (state, projects) {
      state.projects = projects
    }
  },
  actions: {
    async getProjects ({ commit }) {
      const projects = await getProjectsFromApi()
      commit('setProjects', projects)
    }
  }
})

export default store
