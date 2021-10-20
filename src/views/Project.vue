<template>
  <router-link to="/" class="link">Go back</router-link>
  <h3>{{ project.name }}</h3>
  <p>{{ project.description }}</p>
</template>

<script>
export default {
  props: {
    id: {
      type: Number,
      required: true
    }
  },
  computed: {
    project () {
      const project = this.$store.getters.getProjectById(this.id)
      return project
    }
  }
}
</script>

<style lang="scss" scoped>

</style>
