<template>
<!--  <input type="text" v-model="keyword" />-->
  {{count}}
</template>

<script>
import  { ref, watchEffect,onBeforeUpdate} from "vue";

export default {
  name: "watchEffect",

  setup() {

    const count = ref(0)

    watchEffect((onInvalidate)=> {
      console.log(count.value)

      onInvalidate(()=> {
        console.log('清理副作用')
      })

    },{
      flush: 'post'
    })

    onBeforeUpdate(()=> {
      console.log('update')
    })

    setTimeout(()=> {
      count.value ++
    },1000)
    setTimeout(()=> {
      count.value ++
    },2000)

    return {
      count
    }

    // 不用使用data
    // const keyword = ref('')
    // const getKeyWord = (val) => {
    //   setTimeout(()=> {
    //     console.log('异步检索的值',val)
    //   },1000)
    // }
    //
    // watchEffect((onInvalidate)=>{
    //   const timer = getKeyWord(keyword.value)
    //   console.log('键入的值:',keyword.value)
    //
    //   onInvalidate(()=>{
    //     clearTimeout(timer)
    //   })
    // })
    //
    // return {
    //   keyword
    // }


    // const count = ref(0)
    // const name = ref("mr.lee")
    //
    // const stop = watchEffect((onInvalidate) => {
    //   console.log('effect')
    //   console.log(count.value + '-' + name.value)
    //
    //   // 第一次执行不会触发 onInvalidate回调
    //   // 当第二次执行时，会先执行这个回调，再执行上面的输出
    //   onInvalidate(()=> {
    //     console.log('清理副作用')
    //   })
    // })
    //
    //
    // setTimeout(()=> {
    //   count.value = 1
    // },1000)
    // setTimeout(()=> {
    //   count.value = 2
    // },2000)

    // stop()
    // count.value = 3
    // name.value = "mr.wang"
    // name.value = "mr.zhang"
  }
}
</script>

<style scoped>

</style>