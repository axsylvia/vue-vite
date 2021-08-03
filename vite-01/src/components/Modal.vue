<template>
  <!-- <div id="center" v-if="isOpen"> -->
  <!-- <teleport to="body"> -->
  <div id="center">
    <h2><slot>this is modal</slot></h2>
    <button @click="buttonClick">close</button>
  </div>
  <!-- </teleport> -->
</template>

<script lang="ts">
import { defineComponent, onMounted} from 'vue'

export default defineComponent({
  props: {
    isOpen: Boolean,
  },
  emits: {
    'close-modal': null
  },
  setup(props, context) {
    const buttonClick = () => {
      context.emit('close-modal')
    }
    return {
      buttonClick
    }
  }
})
</script>


<style scoped>
#center {
  width: 200px;
  height: 200px;
  border: 2px solid black;
  position: fixed;
  left: 50%;
  top: 50%;
  margin-left: -100px;
  margin-top: -100px;
  background: #fff;
}
#center {
  /* width: 582px;
  height: 287px !important;
  background: #fff;
  border-radius: 10px;
  text-align: center; */
  /* position: relative; */
}
</style>