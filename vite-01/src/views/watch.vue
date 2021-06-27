<template>
  {{count}}{{name}}
</template>

<script>
import {ref,watch} from "vue";

export default {
  name: "watch",

  setup(){

    const count = ref(0)
    const name = ref('mr.lee')

    watch([count,name],([count,Name],[prevCount,prevName])=> {
      console.log('count:',count,'Name:',Name)
      console.log('prevCount:',prevCount,'prevName:',prevName)
    })

    // 监听单个数据源，如果没有使用箭头函数，救护自动展开
    // watch(count,(count,prevCount)=> {
    //   console.log('count:',count,'prevCount:',prevCount)
    // })

    // watch(()=> count.value,(count,prevCount)=> {
    //   console.log('count:',count,'prevCount:',prevCount)
    // })

    setTimeout(()=> {
      count.value ++
      name.value = 'mr.wang'
    },1000)
    setTimeout(()=> {
      count.value ++
      name.value = 'mr.zhang'
    },2000)

    return {
      count,name
    }


  }
}
</script>

<style scoped>

</style>