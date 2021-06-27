<template>
</template>

<script>
import { ref, reactive, toRef, toRefs } from  'vue'

  const userF = () => {
    const state = reactive({
      foo: 1,
      bar: 2
    })

    return toRefs(state)
  }

export default {
  name: "toRef",
  setup () {

    const { foo, bar} = userF()
    console.log(foo)
    console.log(bar.value)

    const obj  = {
      name: "mr.lee",
      age: 100
    }

    const info = {
      // name: obj.name,
      // name: ref(obj.name)
      name: toRef(obj,'name')
    }

    setTimeout(()=> {
      console.log(info.name.value)
    },1000)

    obj.name = "mr.wang"

    console.log(obj.name)
    const nameRef =  ref(obj.name)
    const nameToRef = toRef( obj ,'name')
    console.log(nameRef.value)
    console.log(nameToRef.value)
    // ref和toRef都是给一个静态数据实行响应式,转换成ref对象
    // ref是复制操作，和之前的对象断了关联
    // toRef是引用操作，当数据修改时，原数据也会被修改

    // nameRef.value = "mr.wang"
    nameToRef.value  = "mrl.wang"
    console.log(obj.name)

  }
}
</script>

<style scoped>

</style>