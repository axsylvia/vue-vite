<template>
  <!-- hello world 7.3 -->

  <!-- <div>
    <p
      class="text-red-600 sm:text-yellow-300 lg:text-green-600 xl:text-blue-300"
    >
      text-color测试
    </p> -->

  <!-- <div class="text-komabig font-komafont">小马大字体</div> -->

  <!-- 字体响应式 -->
  <!-- <div class="text-xl sm:text-xl md:text-2xl lg:text-3xl xl:text-4xl">
      字体响应式
    </div> -->

  <!-- 响应式对齐 -->
  <!-- <div class="flex justify-start lg:justify-center 2xl:justify-end text-3xl">
      i love tailwind
    </div> -->

  <!-- <h1>Vue</h1> -->
</template>

<script>
export default {
  data () {
    return {
      opacity: 0
    }
  },
  mounted () {
    setInterval(_ => {
      this.opacity >= 1 && (this.opacity = 0)
      this.opacity += 0.2
    }, 300)
  }
}

</script>

<style scoped>
h1 {
  color: rgb(65, 184, 131);
  opacity: v-bind(opacity);
}
</style>