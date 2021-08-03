<template>
  {{ count }}
  {{ myCount }}
  {{ youCount }}
</template>

<script>

import { ref, computed } from "vue";

export default {
  name: "computed",
  setup () {
    const count = ref(1)
    const myCount = computed(() => {
      return 'myCount:' + count.value
    })

    const youCount = computed({
      get: () => 'youcount:' + count.value,
      set: (val) => {
        count.value = val
      }
    })

    youCount.value = 2

    return {
      count,
      myCount, youCount
    }
  }
}
</script>

<style scoped>
</style>