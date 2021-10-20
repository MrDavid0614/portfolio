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
  created () {
    this.getSkills()
  },
  data () {
    return {
      skills: []
    }
  },
  methods: {
    async getSkills () {
      const skills = await fetch('https://portfolio-backend06.herokuapp.com/skills').then(res => res.json())
      this.skills = skills
    }
  }
}
</script>

<style lang="scss" scoped>

</style>
