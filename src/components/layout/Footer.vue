<template>
  <footer>
    <div class="container">
      <img src='../../assets/darth-vader-footer.png' width="70">
      <img src='../../assets/star-wars-logo.png' width="150">
      <img src='../../assets/luke.png' width="40">
    </div>
  </footer>
</template>

<script>
export default {
  name: 'Footer'
}
</script>

<style lang="css" scoped>
  footer {
    position: fixed;
    bottom: 0;
    background-color: #1a93b2;
    width: 100%;
  }
  footer .container {
    display: flex;
    justify-content: space-between;
    align-items: center;
    padding: 10px 15px;
  }

  /* responsive */

  @media(max-width: 768px) {
    footer .container img:nth-of-type(2) {
      width: 100px;
    }
  }
</style>