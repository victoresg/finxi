<template>
  <header>
    <Modal :show="showModal" @close="closeModal" />
    <div class="header-content">
      <span class="mr-4 mr-md-0">
        <router-link to="/">
          HOME
        </router-link>
      </span>
      <button @click="setModal" class="header-content-btn mr-4 mr-md-0 p-md-2">NEW SMARTLIST</button>
      <button @click="redirect" class="header-content-btn p-md-2">     
        <router-link to="/notes">
          NOTES
        </router-link>
      </button>
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
    showModal: false,
    selected: 't1',
    items: [
      { title: 'COMPANY DATA', name: 't1' },
      { title: 'COMPANY TABLE', name: 't2' },
      { title: 'COMPANY PAGE', name: 't3' }
    ]
  }),
  methods: {
    setModal () {
      this.showModal = !this.showModal
    },
    closeModal () {
      this.showModal = !this.showModal
    },
    redirect () {
      this.$router.push('/notes')
    }
  }
}
</script>

<style lang="scss" scoped>
  header {
    display: flex;
    align-items: center;
    padding: 0 220px;
    width: 100%;
    background-color: #42b983;
    height: 80px;
    .header-content {
      display: flex ;
      align-items: center;
      justify-content: space-between;
      width: 100%;
      &-btn {
        background-color: #42b983;
        border-radius: 5px;
        border: none;
        color: #ffff; 
        outline-style: none;
        cursor: pointer;
        &:active {
          box-shadow: inset 0 0 1em #1d21249e, 0 0 1em #1d21243d;
        }
      }
    }
    a {
      color: #ffff;
    }
  }
  @media(max-width: 768px) {
    .header {
      img {
        width: 150px;
      }
      font-size: 12px;
      button {
        background-color: transparent;
        white-space: nowrap;
      }
    }
  }
</style>