<template>
  <div class="project-container" @click="openProjectDetails( project.id )">
      <h3>{{ project.name }}</h3>
      <p>{{ project.description }}</p>
  </div>
</template>

<script>
export default {
  props: {
    project: {
      type: Object,
      required: true
    }
  },
  methods: {
    openProjectDetails (id) {
      this.$router.push(`/projects/${id}`)
    }
  }
}
</script>

<style lang="scss" scoped>
.project-container {
    padding: 30px;
    box-shadow: 0 4px 8px 0 rgba(0,0,0,0.2);
    transition: 0.3s;

    &:hover {
        box-shadow: 0 8px 16px 0 rgba(0,0,0,0.2);
    }
}
</style>
