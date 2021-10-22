<template>
  <main class="home">
    <Hero />
    <Skills />
    <ProjectsList />
  </main>
</template>

<script>
// @ is an alias to /src
import Hero from '@/components/Hero.vue'
import Skills from '@/components/Skills.vue'
import ProjectsList from '@/components/ProjectsList.vue'

export default {
  name: 'Home',
  components: {
    Skills,
    ProjectsList,
    Hero
  }
}
</script>
