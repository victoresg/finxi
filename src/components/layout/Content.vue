<template>
  <main>
    <div class="content p-3">
     <div class="d-flex flex-column">
       teste: {{ teste1 }}
       <button @click="_testFunc">botão</button>
     </div>
    </div>
  </main>
</template>

<script>


export default {
  name: 'Content',
  data: () => ({
  teste1: ''
  }),
  methods: {
    _testFunc() {
      this.teste1 = 'ALUUUU'
    }
  }
}
</script>

<style lang="scss" scoped>

</style>