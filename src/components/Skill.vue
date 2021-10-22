<template>
  <div
        class="flex flex-col justify-center shadow-md hover:shadow-lg hover:translate-x-96
              border-transparent border-2 rounded-lg p-2 w-10/12 dark:bg-blue-100"
    >
        <img :src="skill.image" alt="Skill image" class="w-24 self-center">
    </div>
</template>

<script>
export default {
  props: {
    skill: {
      type: Object,
      required: true
    }
  }
}
</script>
