<template>
  <header>
    <div class="header-content container">
      <span v-if="$route.path === '/'">Vou deter o Lord Sith com:</span>
      <span class="details-message" v-else>Darth Vader foi derrotado com:</span>
      <div v-if="$route.path === '/'" class="ui icon input">
        <input
          type="text"
          placeholder="Pesquisa..."
          :class="$v.search.$dirty && $v.search.$invalid ? 'is-invalid' : ''"
          v-model="search"
          @keypress="searchGiphy($event)"
          @focusout="$v.search.$touch()"
        >
        <Alert :v="$v.search" />
        <i class="search icon" @click="searchGiphy('click')"></i>
      </div>
    </div>
  </header> 
</template>

<script>
import { required } from 'vuelidate/lib/validators'
import { mapActions } from 'vuex'
import Alert from '@/components/helpers/Alert'

export default {
  name: 'Header',

  components: {
    Alert
  },

  data: () => ({
    search: ''
  }),

  methods: {
    ...mapActions(['setList']),
    
    searchGiphy(e) {
      console.log('1')
      if (this.$v.$invalid) return
      const { search } = this
      if(e === 'click') {
        this.setList(search)
      }
      if(e.key === 'Enter') {
        this.setList(search)
      }
    }
  },

  validations () {
    return {
      search: {
        required
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
    padding: 20px 220px;
    width: 100%;
    background-color: #730000;
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
  header .header-content .ui {
    position: relative;
    display: flex;
    flex-direction: column;
  }
  header .header-content .ui .is-invalid {
    border: 2px solid #bdb81d;
  }

  /* responsive */

  @media(max-width: 1200px) {
    header {
      padding: 20px 0;
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