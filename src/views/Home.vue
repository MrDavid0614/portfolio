<template>
  <main class="home">
    <Skills />
    <ProjectsList />
  </main>
</template>

<script>
// @ is an alias to /src
import Skills from '@/components/Skills.vue'
import ProjectsList from '@/components/ProjectsList.vue'

export default {
  name: 'Home',
  components: {
    Skills,
    ProjectsList
  }
}
</script>
