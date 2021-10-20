<template>
    <h1>{{ error }}</h1>
    <img
        src="@/assets/images/404.png"
        alt="Error 404"
        class="background-image"
    >
</template>

<script>
export default {
  computed: {
    error () {
      const defaultError = 'Error 404: Page Not Found'
      return this.$route.params.error || defaultError
    }
  }
}
</script>

<style lang="scss" scoped>
.background-image {
    width: 100vh;
    height: 80vh;
}
</style>
