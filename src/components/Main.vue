<template>
  <div>
    <Header />
    <router-view />
    <Footer />
  </div>
</template>

<script>
import Header from './layout/Header.vue'
import Footer from './layout/Footer.vue'

export default {
  name: 'Main',
  components: {
    Header,
    Footer
  }
}
</script>