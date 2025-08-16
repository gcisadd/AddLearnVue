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
  import { computed, reactive, ref } from 'vue';
  const msg = ref('Hello World!')
  const list = ref([1, 2, 3, 4, 5, 6, 7, 8, 9, 10])
  const filterList = computed(() => {
    return list.value.filter(item => item % 2 === 0)
  })
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
    // console.log(msg)
    console.log(filterList.value)
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
