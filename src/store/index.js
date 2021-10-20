import { createStore } from 'vuex'
import { getSkillsFromApi, getProjectsFromApi } from '@/api'

const store = createStore({
  state: {
    skills: [],
    projects: []
  },
  getters: {
    getProjectById: (state) => (id) => {
      const project = state.projects.find(project => project.id === id)
      return project
    }
  },
  mutations: {
    setSkills (state, skills) {
      state.skills = skills
    },
    setProjects (state, projects) {
      state.projects = projects
    }
  },
  actions: {
    async getProjects ({ commit }) {
      const projects = await getProjectsFromApi()
      commit('setProjects', projects)
    },
    async getSkills ({ commit }) {
      const skills = await getSkillsFromApi()
      commit('setSkills', skills)
    }
  }
})

export default store
