<template>
  <div class="App">
    <MyHeader></MyHeader>
    <MyBody></MyBody>
    <MyFooter></MyFooter>
  </div>
</template>

<script>
import MyBody from './components/MyBody.vue';
import MyFooter from './components/MyFooter.vue';
import MyHeader from './components/MyHeader.vue';
export default {
  components: {
    MyHeader,
    MyBody,
    MyFooter
  },
}
</script>

<style>
  .App {
    margin: 0 auto;
    padding: 20px;
    width: 600px;
    height: 700px;
    background-color: #87ceeb;;
  }
</style>