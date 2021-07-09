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

  <div class="overflow-hidden bg-black md:hidden">
    <!-- banner -->
    <div class="mx-auto mt-12">
      <img class="mx-auto" src="@/assets/sz-banner.png" alt="" />
    </div>
    <!-- 文本 -->
    <div class="text-gray-500 text-center mt-11">
      <div>DfinitySZ深圳社区</div>
      <div>专注于Dfinity生态技术发展交流与优质项目挖掘分析。</div>
    </div>
    <!-- 二维码 -->
    <div class="w-24 h-24 bg-cover mx-auto mt-11">
      <img class="mx-auto" src="@/assets/qr.png" alt="" />
    </div>
    <div class="text-gray-500 text-center text-xl">DfinitySZ公众号</div>
    <!-- 4-logo -->
    <div class="">
      <img src="@/assets/twi.png" alt="" />

      <img src="@/assets/tel.png" alt="" />

      <img src="@/assets/six.png" alt="" />

      <img src="@/assets/weixin.png" alt="" />
    </div>
  </div>

  <!-- <div class="hidden md:block max-w-screen-lg mx-auto"> -->
  <!-- top -->
  <!-- <div class="flex justify-between">
      <div
        class="w-32 h-9 bg-cover mt-3"
        style="background-image: url(/src/assets/sz-banner.png)"
      ></div>
      <div class="md:flex w-60 justify-between mt-5">
        <div
          class="w-24px h-24px bg-cover"
          style="background-image: url(/src/assets/twi.png)"
        ></div>
        <div
          class="w-24px h-24px bg-cover"
          style="background-image: url(/src/assets/tel.png)"
        ></div>
        <div
          class="w-24px h-24px bg-cover"
          style="background-image: url(/src/assets/six.png)"
        ></div>
        <div
          class="w-24px h-24px bg-cover"
          style="background-image: url(/src/assets/weixin.png)"
        ></div>
      </div>
    </div> -->
  <!-- mid -->
  <!-- <div
      class="mt-2"
      style="width: 1024px; height: 1px; border: 1px solid #3e3e3e"
    ></div>
    <div class="flex justify-between">
      <div class="text-gray-500 mt-7 text-xs">
        <div>DfinitySZ深圳社区</div>
        <div class="mt-1.5">
          专注于Dfinity生态技术发展交流与优质项目挖掘分析。
        </div>
      </div>
      <div class="w-28 h-28 bg-cover mt-3">
        <img src="@/assets/qr.png" alt="" />
      </div>
    </div> -->
  <!-- bottom -->
  <!-- <div class="flex text-red-400 justify-between mt-3 text-xs pb-4">
      <div>Copyright@2021 DfinitySZ</div>
      <div>DfinitySZ公众号</div>
    </div> -->
  <!-- </div> -->
  <!-- </div> -->
</template>

<script setup>
import HelloWorld from '../components/HelloWorld.vue'

</script>

<style scoped>
.img-size img {
  width: 24px;
  height: 24px;
}
.b {
  background-color: black;
}
.a {
  background-color: black;
}
</style>