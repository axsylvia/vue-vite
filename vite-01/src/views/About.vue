<template>
  <button @click="increment">{{count}}</button>
  {{version}}
</template>

<script>
import {computed, ref} from 'vue'
export default {
    // 入口
    setup() {

      const { count, increment, version } =  test()   // 逻辑1

      return {
        count,
        increment,
        version
      }

    },
}

// 这里方法是逻辑点1，也可以分离到单独文件,提高复用性
const test = () => {
  // 响应式变量
  const count = ref(0)

  //方法
  const  increment = () => {
    count.value++
  }

  //计算属性
  const version = computed(() => 'v1.0')

  return {
    count,increment,version
  }
}
</script>

<style scoped>

</style>