<template>
  <section class="bg-blue-100 mt-32 p-6">
    <h1 class="text-center text-5xl">My Projects</h1>
    <section class="grid grid-cols-3 gap-5" id="projects">
      <ProjectsListItem
        v-for="project in projects"
        :key="project.id"
        :project="project"
      />
    </section>
  </section>
</template>

<script>
import { mapState } from 'vuex'
import ProjectsListItem from '@/components/ProjectsListItem.vue'

export default {
  computed: mapState({
    projects: 'projects'
  }),
  components: {
    ProjectsListItem
  }
}
</script>
