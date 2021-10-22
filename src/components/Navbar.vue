<template>
  <nav class="h-20 pr-10 bg-gray-900 flex justify-end items-center gap-8">
    <router-link to="/#projects" class="nav-item">Projects</router-link>
    <a href="https://github.com/MrDavid0614" target="_blank" class="nav-item">
        <i class="fab fa-github nav-item__icon" title="Github link"></i>
    </a>
    <a href="https://linkedin.com/in/raymondmora" target="_blank" class="nav-item">
        <i class="fab fa-linkedin nav-item__icon" title="LinkedIn link"></i>
    </a>
  </nav>
</template>

<script>
export default {
}
</script>

<style lang="scss">
.nav-item {
    @apply text-gray-300 text-2xl
            transition-colors duration-300
            hover:text-blue-500;

    &__icon {
        @apply text-3xl not-italic;
    }
}
</style>
