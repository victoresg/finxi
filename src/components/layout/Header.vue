<template>
  <header>
    <div class="header-content container">
      <span 
        :class="$route.path === '/detalhes' 
          ? 'details-message' 
          : '' "
      >
        {{ title }}
      </span>
      <div v-if="$route.path === '/'" class="ui icon input">
        <input
          type="text"
          placeholder="Pesquisar..."
          :class="$v.model.search.$dirty && $v.model.search.$invalid ? 'is-invalid' : ''"
          v-model="model.search"
          @keypress="searchGiphy($event)"
          @focusout="$v.model.search.$touch()"
        >
        <Alert :v="$v.model.search" />
        <i class="search icon" @click="searchGiphy('click')"></i>
      </div>
    </div>
  </header> 
</template>

<script>
import { required } from 'vuelidate/lib/validators'
import { mapActions, mapState } from 'vuex'
import Alert from '@/components/helpers/Alert'

export default {
  name: 'Header',

  components: {
    Alert
  },

  data: () => ({
    title: 'Vou deter o Lord Sith com:',
    model: {
      search: ''
    }
  }),

  computed: {
    ...mapState(['list'])
  },

  methods: {
    ...mapActions(['setList']),

    searchGiphy(e) {
      let { $v, list, clearField, model: { search } } = this
      
      $v.$touch()
      if($v.$invalid) return
      if(e === 'click') {
        if(list === search) return
        clearField()
      }
      if(e.key === 'Enter') {
        if(list === search) return
        clearField()
      }
    },

    clearField() {
      const { setList, $v, model } = this

      $v.$reset()
      setList(model.search)
      model.search = ''
    },

    headerTitle (value) {
      
      const titleValue = {
        '/': 'Vou deter o Lord Sith com:',
        '/detalhes': 'Darth Vader foi derrotado com:'
      }
      return this.title = titleValue[value]
    }
  },

  watch: {
    '$route.path': function() {
      this.headerTitle(this.$route.path)
    }
  },

  validations () {
    return {
      model: {
        search: {
          required
        }
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
    z-index: 99;
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