<template>
  <h1 class="mt-20 text-5xl">My Skills</h1>
  <section class="flex justify-center m-10">
    <div class="grid grid-cols-3 gap-y-5 gap-x-2">
      <Skill
        v-for="skill in skills"
        :key="skill.id"
        :skill="skill"
      />
    </div>
  </section>
</template>

<script>
import Skill from './Skill.vue'

export default {
  computed: {
    skills () {
      return this.$store.state.skills
    }
  },
  components: {
    Skill
  }
}
</script>
