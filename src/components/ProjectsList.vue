<template>
  <div class="grid grid-cols-3 gap-5">
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
