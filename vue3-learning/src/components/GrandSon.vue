<script setup>
import { inject } from 'vue';
  const grandSonMSg = inject('msg')
  const changeMsg = inject('changeMsg')
</script>
<template>
  我是孙子{{ grandSonMSg }}
  <button @click="changeMsg('ssss')">changeMsg</button>
</template>
