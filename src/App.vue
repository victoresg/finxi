<template>
  <div id="app">
    <Main />
  </div>
</template>

<script src="https://code.jquery.com/jquery-3.3.1.slim.min.js" integrity="sha384-q8i/X+965DzO0rT7abK41JStQIAqVgRVzpbzo5smXKp4YfRvH+8abtTE1Pi6jizo" crossorigin="anonymous"></script>
<script src="https://cdnjs.cloudflare.com/ajax/libs/popper.js/1.14.3/umd/popper.min.js" integrity="sha384-ZMP7rVo3mIykV+2+9J3UJ46jBk0WLaUAdn689aCwoqbBJiSnjAK/l8WvCWPIPm49" crossorigin="anonymous"></script>
<script>
import Main from './components/Main.vue'

export default {
  name: 'app',
  
  components: {
    Main
  }
}
</script>

<style>
  body {
    background-image: url("assets/darth-vader.jpg");
    background-attachment: fixed;
    display: block;
    position: absolute;
    left: 0;
    top: 0;
    width: 100%;
    height: 100%;
    z-index: 1;
    background-color: rgb(0 0 0 / 73%);
    background-blend-mode: overlay;
    background-repeat: no-repeat;
    background-size: cover;
  }
  * { outline: none !important; }
  *,
  *:before,
  *:after {
    box-sizing: border-box;
    margin: 0;
    outline: none !important;
    -webkit-tap-highlight-color: transparent;
  }
</style>
