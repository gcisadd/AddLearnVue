<script setup>
import { ref } from 'vue'
  const sonMsg = ref('')
  const props = defineProps({
    title: String,
    content: String,
  })
  const emit = defineEmits(['change-msg'])
  const sendMsg = () => {
    emit('change-msg', sonMsg.value)
  }
</script>
<template>
  <div>
    <div>{{ title }}</div>
    <div>{{ content }}</div>
    <input type="text" v-model="sonMsg" >
    <button @click="sendMsg">点击改变</button>
  </div>
</template>
