<template>
   {{obj.name}} {{arr}}
</template>

<script>
import { reactive, isReactive } from  'vue'
export default {
  name: "Reactive",

  setup(){
    // 响应式对象副本，以Proxy代理对象存在
    const obj = reactive({
          name: "mr.lee",
          age: "100"
        }
    )

    const arr = reactive([1,2,3])

    console.log(obj)
    console.log(isReactive(obj))

    setTimeout(()=> {
      obj.name = "mr.wang",
          arr[0] = "9"
    },1000)

    return {
      obj,arr
    }
  }
}
</script>

<style scoped>

</style>