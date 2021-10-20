<template>
  <div class="p-7 cursor-pointer group" @click="openProjectDetails( project.id )">
      <img src="#" alt="Project image" class="w-4/5 h-4/5">
      <h2 class="bg-gray-900 text-gray-300">
        <span class="tag">&lt;</span>
        {{ project.name }}
        <span class="tag">/&gt;</span>
      </h2>
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

<style scoped>
  .tag {
    @apply text-gray-900 transition-colors duration-500 group-hover:text-yellow-600
  }
</style>
