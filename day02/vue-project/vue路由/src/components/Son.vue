<template>
  <div class="son" style="border:3px solid #000;margin:10px">
    <!-- 3.直接使用props的值 -->
    我是Son组件 {{ title }}
    <button @click="fn">点击</button>
  </div>
</template>

<script>
export default {
  name: 'Son-Child',
  // 2.通过props来接受
  props: {
    title: String,
  },
  methods: {
    fn() {
      console.log('点击了son')
      this.$emit('changeTitle', '改变')
    }
  }
}
</script>

<style>

</style>