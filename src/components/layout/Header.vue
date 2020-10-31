<template>
  <header>
    <div class="header-content container">
      <span>Vou deter o Lord Sith com:</span>
      <div class="ui icon input loading">
        <input 
          type="text" 
          placeholder="Pesquisa..."
          v-model="search"
          @keypress="searchGiphy($event)"
        >
        <i class="search icon"></i>
      </div>
    </div>
  </header> 
</template>

<script>
import Modal from '@/components/helpers/Modal'
import { mapActions } from 'vuex'

export default {
  name: 'Header',

  data: () => ({
    search: '' 
  }),

  methods: {
    ...mapActions(['setList']),
    searchGiphy(e) {
      const { search } = this
      if(e.key === 'Enter') {
        this.setList(search)
      }
    }
  }
}
</script>

<style lang="css" scoped>
  header {
    position: fixed;
    display: flex;
    align-items: center;
    padding: 0 220px;
    width: 100%;
    background-color: #1a93b2;
    height: 80px;
    z-index: 9;
  }
  header .header-content {
    display: flex ;
    align-items: center;
    justify-content: space-between;
    width: 100%;
  }
</style>