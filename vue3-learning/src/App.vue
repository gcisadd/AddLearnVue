<script>
import { ref } from 'vue'
  export default {
    setup() {
      const msg = ref('Hello World!')
      const fun = () => {
        console.log('Hello World!')
      }
      return {
        msg,
        fun
      }
    }
  }

</script>
<template>
  <div>
    <button @click="fun">{{ msg }}</button>
  </div>
</template>
<style>
  button {
    background-color: #4CAF50;
    color: white;
    padding: 14px 20px;
    margin: 8px 0;
    border: none;
    cursor: pointer;
    width: 100%;
  }
</style>
