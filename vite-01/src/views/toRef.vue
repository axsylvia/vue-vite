<template>
  <!-- container会在不同屏幕断点下有不同的固定宽度 -->
  <div class="container mx-auto">
    <input type="radio" name="tab" id="iphone-12-pro" class="hidden" checked />
    <input type="radio" name="tab" id="iphone-12-pro" class="hidden" />
    <input type="radio" name="tab" id="iphone-12" class="hidden" />
    <input type="radio" name="tab" id="iphone-se" class="hidden" />

    <div class="my-4 nav">
      <label for="iphone-12-pro">
        <span class="py-2 px-5 rounded-full inline-block">全部</span>
      </label>
      <label for="iphone-12-pro">
        <span class="py-2 px-5 rounded-full inline-block">iPhone 12 Pro</span>
      </label>
      <label for="iphone-12">
        <span class="py-2 px-5 rounded-full inline-block">iPhone 12</span>
      </label>
      <label for="iphone-se">
        <span class="py-2 px-5 rounded-full inline-block">iPhone Se</span>
      </label>
    </div>

    <!-- 盒子圆角加阴影 -->
    <div class="p-8 rounded-xl shadow-md hidden tab-iphone-12-pro">
      <div class="w-3/5 flex flex-col justify-center">
        <!-- button宽度过大，包裹一层div -->
        <div>
          <h2 class="text-2xl font-bold">iphone 12 pro</h2>
          <p class="mt-3">
            我们的硬件和软件配合默契，协作无间。想将新 AirPods 与 iPhone
            配对？轻轻一点就设置完毕。想和附近的朋友共享照片、视频或通讯录？隔空投送功能会在屏幕上列出他们的名字，只要动动手指选中就能搞定。
          </p>
          <button
            class="
              text-lg
              bg-black
              rounded-full
              shadow
              py-2
              px-5
              text-white
              mt-6
              transform
              hover:scale-110
              hover:bg-blue-600
              transition
            "
          >
            Shop Now
          </button>
        </div>
      </div>
      <div class="w-2/5">
        <img
          src="https://www.apple.com.cn/v/iphone-12/key-features/c/images/overview/compare/compare_iphone_12_pro__wmdc5a1hns2i_large.jpg"
          alt=""
        />
      </div>
    </div>
    <!-- 盒子圆角加阴影 -->
    <div class="p-8 rounded-xl shadow-md hidden tab-iphone-12">
      <div class="w-3/5 flex flex-col justify-center">
        <div>
          <h2 class="text-2xl font-bold">iphone 12</h2>
          <p class="mt-3">
            我们的硬件和软件配合默契，协作无间。想将新 AirPods 与 iPhone
            配对？轻轻一点就设置完毕。想和附近的朋友共享照片、视频或通讯录？隔空投送功能会在屏幕上列出他们的名字，只要动动手指选中就能搞定。
          </p>
          <button
            class="
              text-lg
              bg-black
              rounded-full
              shadow
              py-2
              px-5
              text-white
              mt-6
              transform
              hover:scale-110
              hover:bg-blue-600
              transition
            "
          >
            Shop Now
          </button>
        </div>
      </div>
      <div class="w-2/5">
        <img
          src="https://www.apple.com.cn/v/iphone-12/key-features/c/images/overview/compare/compare_iphone_12_pro__wmdc5a1hns2i_large.jpg"
          alt=""
        />
      </div>
    </div>
    <!-- 盒子圆角加阴影 -->
    <div class="p-8 rounded-xl shadow-md hidden tab-iphone-se">
      <div class="w-3/5 flex flex-col justify-center">
        <div>
          <h2 class="text-2xl font-bold">iphone se</h2>
          <p class="mt-3">
            我们的硬件和软件配合默契，协作无间。想将新 AirPods 与 iPhone
            配对？轻轻一点就设置完毕。想和附近的朋友共享照片、视频或通讯录？隔空投送功能会在屏幕上列出他们的名字，只要动动手指选中就能搞定。
          </p>
          <button
            class="
              text-lg
              bg-black
              rounded-full
              shadow
              py-2
              px-5
              text-white
              mt-6
              transform
              hover:scale-110
              hover:bg-blue-600
              transition
            "
          >
            Shop Now
          </button>
        </div>
      </div>
      <div class="w-2/5">
        <img
          src="https://www.apple.com.cn/v/iphone-12/key-features/c/images/overview/compare/compare_iphone_12_pro__wmdc5a1hns2i_large.jpg"
          alt=""
        />
      </div>
    </div>
  </div>
</template>

<script>
import { ref, reactive, toRef, toRefs } from 'vue'

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

    const { foo, bar } = userF()
    console.log(foo)
    console.log(bar.value)

    const obj = {
      name: "mr.lee",
      age: 100
    }

    const info = {
      // name: obj.name,
      // name: ref(obj.name)
      name: toRef(obj, 'name')
    }

    setTimeout(() => {
      console.log(info.name.value)
    }, 1000)

    obj.name = "mr.wang"

    console.log(obj.name)
    const nameRef = ref(obj.name)
    const nameToRef = toRef(obj, 'name')
    console.log(nameRef.value)
    console.log(nameToRef.value)
    // ref和toRef都是给一个静态数据实行响应式,转换成ref对象
    // ref是复制操作，和之前的对象断了关联
    // toRef是引用操作，当数据修改时，原数据也会被修改

    // nameRef.value = "mr.wang"
    nameToRef.value = "mrl.wang"
    console.log(obj.name)

  }
}
</script>

<style scoped>
#iphone-12-pro:checked ~ .tab-iphone-12-pro {
  @apply flex;
}
#iphone-12-pro:checked ~ .nav label[for="iphone-12-pro"] span {
  @apply bg-gray-500;
}
#iphone-12:checked ~ .tab-iphone-12 {
  @apply flex;
}
#iphone-12:checked ~ .nav label[for="iphone-12"] span {
  @apply bg-gray-500;
}
#iphone-se:checked ~ .tab-iphone-se {
  @apply flex;
}
#iphone-se:checked ~ .nav label[for="iphone-se"] span {
  @apply bg-gray-500;
}
</style>