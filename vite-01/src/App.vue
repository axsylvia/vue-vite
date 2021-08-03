<template>
  <div class="bg-img"><img src="../src/assets/default-cover.jpg" alt="" /></div>
  <div class="nav" :class="{ active: aa }">
    <!-- <router-link to="/">Home</router-link> |
    <router-link to="/about">about</router-link> |
    <router-link to="/reactive">Reactive</router-link>|
    <router-link to="/toRef">toRef</router-link>|
    <router-link to="/computed">computed</router-link>|
    <router-link to="/watchEffect">watchEffect</router-link>|
    <router-link to="/watch">watch</router-link>| -->
    <div id="menu" ref="dropdownRef" class="">
      <button @click="openModal" class="text-white">openModal</button>
      <modal @close-modal="onModalClose" v-if="aa"> My Modal!</modal>
      <!-- <modal :isOpen="isOpen" @close-modal="onModalClose" v-if="aa">
        My Modal!</modal
      > -->
    </div>
  </div>

  <router-view></router-view>
</template>


<script lang="ts">
import { defineComponent, ref, watch, onMounted, onUnmounted } from 'vue'
import AsyncShow from './views/AsyncShow.vue'
import DogShow from './views/DogShow.vue'
import Modal from './components/Modal.vue'
import useClickOutside from './hooks/useClickOutside '
export default defineComponent({
  // data: function() {
  //   return {
  //     isOpen: false
  //   }
  // },
  // mounted(){
  //   document.addEventListener("click", this.bodyCloseMenus);
  // },
  // methods: {
  //   bodyCloseMenus(e) {
  //     // let self = this;
  //     console.log(this.$refs.ma)
  //     if (this.$refs.main && !this.$refs.ma(e.target)) {
  //       if (this.isOpen1 == true){
  //       this.isOpen = false;
  //       }
  //     }
  //   }
  // },
  // beforeDestroy() {
  //   document.removeEventListener("click", this.bodyCloseMenus);
  // },
  components: {
    AsyncShow,
    DogShow,
    Modal
  },
  setup () {
    // const isOpen = ref(false)
     const aa = ref(false)
    const openModal = () => {
      // isOpen.value = true
      aa.value = !aa.value
    }
    const onModalClose = () => {
      // isOpen.value = false
      aa.value = false
    }



    // const dropdownRef = ref < null | HTMLElement > (null)
    // const isClickOutside = useClickOutside(dropdownRef)
    // watch(isClickOutside,() => {
    //   if (aa.value && isClickOutside.value){
    //     console.log('aa',aa.value)
    //     console.log('isclick',isClickOutside.value)
    //     aa.value = false
    //   }
    // }) 
    // const handler = (e: MouseEvent) => {
    //   if (dropdownRef.value) {
    //     console.log('aa',dropdownRef.value)
    //     if (!dropdownRef.value.contains(e.target as HTMLElement) && aa.value) {
    //       aa.value = false
    //     }
    //   }
    // }

    onMounted(() => {
      // document.addEventListener('click', handler)
      document.addEventListener('click',(e)=>{
        const userCon = document.getElementById('menu')
        if(userCon && !userCon.contains(e.target as HTMLElement)){
          aa.value = false
        }

      })
    })
    // onUnmounted(() => {
    //   document.removeEventListener('click', handler)
    // })


    return {
      // isOpen, handler
       openModal, onModalClose, 
      aa,
      //  dropdownRef
    }
  },
})
</script>


<style>
.nav {
  position: fixed;
  left: 0;
  top: 0;
  width: 100%;
  height: 100%;
  z-index: 999;
  /* display: flex;
  align-items: center;
  justify-content: center; */
  /* background-color: rgba(0, 0, 0, 0.4); */
}
.nav.active {
  background-color: rgba(0, 0, 0, 0.4);
}
</style>
