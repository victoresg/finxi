<template>
  <div class="notes mb-5 mt-5">
    <h1 class="mb-5 d-flex justify-content-center">Your notes</h1>
    <div v-if="!companyNotes.length">
      <h2 class="d-flex justify-content-center">
        You have no notes yet!
      </h2>
    </div>
    <div v-else class="row d-flex justify-content-center">
      <p v-for="(item, index) in companyNotes" :key="index" class="col-md-4 m-2">
        {{ index }}) {{ item }}
      <button @click="removeNote">X</button>
      </p>
    </div>
  </div>
</template>

<script>
import { mapGetters, mapMutations } from 'vuex'

export default {
  name: 'Notes',
  data: () => ({
    companyNotes: ''
  }),
  created() {
    this.companyNotes = this.getList
  },
  computed: {
    ...mapGetters(['getList']),
  },
  methods: {
    ...mapMutations(['setList']),
    removeNote(index) {
      this.companyNotes.splice(index, 1);
      this.setList(this.companyNotes)
    }
  }
}
</script>

<style lang="scss">
  .notes {
    min-height: 100vh;
    p {
      position: relative;
      border: 1px #00000047 solid;
      box-shadow: 0 0 1em #0006;
      padding: 60px 40px;
      button {
        color: #ffff;
        font-weight: 900;
        width: 2rem;
        height: 2rem;
        right: 10px;
        top: 10px;
        position: absolute;
        border: 1px #ff0000 solid;
        background-color: #ff000094;
        outline-style: none;
        cursor: pointer;
      }
    }
  }
</style>