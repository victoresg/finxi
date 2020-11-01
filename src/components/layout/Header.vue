<template>
  <header>
    <div class="header-content container">
      <span v-if="$route.path === '/'">Vou deter o Lord Sith com:</span>
      <span class="details-message" v-else>Darth Vader foi derrotado com:</span>
      <div v-if="$route.path === '/'" class="ui icon input">
        <input
          type="text"
          placeholder="Pesquisa..."
          v-model="search"
          @keypress="searchGiphy($event)"
        >
        <i class="search icon" @click="searchGiphy('click')"></i>
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
      if(e === 'click') {
        this.setList(search)
      }
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
    background-color: #730000;
    height: 80px;
    z-index: 9;
  }
  header .header-content {
    display: flex ;
    align-items: center;
    justify-content: space-between;
    width: 100%;
  }
  header .header-content span {
    text-shadow: 2px 2px #00000030;
    font-size: 30px;
    color: #fff;
    font-weight: 800;
  }
  header .header-content .details-message {
    width: 100%;
    text-align: center;
  }
  .ui.icon.input>i.icon {
    cursor: pointer;
  }
  .ui.icon.input>i.icon:not(.link) {
    pointer-events: initial;
  }

  /* responsive */

  @media(max-width: 1200px) {
    header {
      padding: 50px 0;
    }
    header .header-content {
      display: flex;
      flex-direction: column;
      justify-content: center;
      align-items: center;
      text-align: center;
    }
    header .header-content span {
      font-size: 15px;
      margin-bottom: 5px;
    }
  }
</style>