<template>
  <div class="home">
    <img alt="Vue logo" src="../assets/logo.png">
    <Skills />
  </div>
</template>

<script>
// @ is an alias to /src
import Skills from '@/components/Skills.vue'

export default {
  name: 'Home',
  components: {
    Skills
  }
}
</script>
