<template>
  <div class="projects-list">
    <ProjectsListItem
      v-for="project in projects"
      :key="project.id"
      :project="project"
    />
  </div>
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

<style lang="scss" scoped>
  .projects-list {
    display: grid;
    grid-template-columns: repeat(3, 1fr);
    gap: 20px;
  }
</style>
