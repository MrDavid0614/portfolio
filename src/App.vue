<template>
  <Navbar />
  <router-view/>
  <Footer />
</template>

<script>
import store from '@/store'
import Navbar from '@/components/Navbar.vue'
import Footer from '@/components/Footer.vue'

export default {
  store,
  created () {
    this.$store.dispatch('getSkills')
    this.$store.dispatch('getProjects')
  },
  components: {
    Navbar,
    Footer
  }
}
</script>

<style lang="scss">
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
}

</style>
