<template>
  <div class="my-button" @click="fn">
    <button class="btn">通用按钮</button>
  </div>
</template>

<script>
export default {
  methods: {
    fn() {
      alert('点你呢')
    }
  }
}
</script>

<style>
  .my-button {
    padding: 0;
    line-height: 1;
  }
  .btn {
    padding: 0;
    width: 80px;
    height: 40px;
    border: none;
    border-radius: 8px;
    color: white;
    background-color: #2f9450;
    cursor: pointer;
  }
</style>