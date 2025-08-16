<!-- <script>
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
</script> -->
<script setup>
  import { reactive, ref } from 'vue';
  const msg = ref('Hello World!')
  const obj1 = reactive({
    name: 'Vue3',
    age: 18
  })
  const obj2 = {
    name: 'Vue3',
    age: 18
  }
  const fun = () => {
    obj1.age ++
    obj2.age ++
    console.log(msg)
  }
</script>
<template>
  <div>
    <div>{{ msg }}</div>
    <div>{{ obj1}}</div>
    <div>{{ obj2}}</div>
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
