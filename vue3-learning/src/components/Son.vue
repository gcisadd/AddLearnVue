<script setup>
import { onMounted, ref } from 'vue'
import GrandSon from './GrandSon.vue'
  const sonMsg = ref('')
  const inputRef = ref(null)
  const props = defineProps({
    title: String,
    content: String,
  })
  const emit = defineEmits(['change-msg'])
  const sendMsg = () => {
    emit('change-msg', sonMsg.value)
  }
  onMounted(() => {
    inputRef.value.focus()
  })
  const str = 'hello world'
  defineExpose({
    str,
  })
</script>
<template>
  <div>
    <div>{{ title }}</div>
    <div>{{ content }}</div>
    <input ref="inputRef" type="text" v-model="sonMsg" >
    <button @click="sendMsg">点击改变</button>
  </div>
  <GrandSon></GrandSon>
</template>
