<template>
  <footer>
    <div class="container">
      <img src='../../assets/star-wars-logo.png' width="150">
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
    background-color: #730000;
    width: 100%;
    z-index: 99;
  }
  footer .container {
    display: flex;
    justify-content: center;
    align-items: center;
    padding: 10px 15px;
  }

  /* responsive */

  @media(max-width: 768px) {
    footer .container img {
      width: 100px;
    }
  }
</style>