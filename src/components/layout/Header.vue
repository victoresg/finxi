<template>
  <header>
    <div class="header-content">
      header
    </div>
  </header> 
</template>

<script>
import Modal from '@/components/helpers/Modal'

export default {
  name: 'Header',
  components: {
    Modal
  },
  data: () => ({

  }),
  methods: {

  }
}
</script>

<style lang="css" scoped>
  header {
    display: flex;
    align-items: center;
    padding: 0 220px;
    width: 100%;
    background-color: #42b983;
    height: 80px;
  }
  header .header-content {
    display: flex ;
    align-items: center;
    justify-content: space-between;
    width: 100%;
  }
</style>