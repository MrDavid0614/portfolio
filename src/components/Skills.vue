<template>
    <ul>
        <li
            v-for="skill in skills"
            :key="skill.id"
        >{{ skill.name }}</li>
    </ul>
</template>

<script>
export default {
  computed: {
    skills () {
      return this.$store.state.skills
    }
  }
}
</script>
