<template>
  <h1>Projects</h1>
  <ProjectsList />
</template>

<script>
import ProjectsList from '@/components/ProjectsList.vue'

export default {
  computed: {
    projects () {
      return this.$store.projects
    }
  },
  components: {
    ProjectsList
  }
}
</script>

<style lang="scss" scoped>

</style>
