<template>
  <main>
    <div class="content">
      <button class="ui primary button">
        Buscar
      </button>
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