<template>
  <div class="back-view" @click="goTo()">
    <div class="pointer">
      <img src='../../assets/left-arrow.png' width="30">
      <span>Início</span>
    </div>
  </div>
</template>

<script>

export default {
  name: 'BackView',
  
  methods: {
    goTo() {
      const { $router } = this

      $router.go(-1)
    }
  }
}
</script>

<style lang="css">
  .back-view {
    width: 100%;
    margin: 10px 0;
  }
  .back-view .pointer {
    display: flex;
    justify-content: flex-start;
    align-items: center;
    cursor: pointer;
    max-width: 10%;
  }
</style>