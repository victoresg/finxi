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
import { getAllGiphys } from '@/services/giphy'

export default {
  name: 'Content',
  data: () => ({
    searchType: 'foo'
  }),
  created() {
    const { searchType } = this
    const currentApiKey = 'TtLIWxlcNtvlFm0s0ufFy2SpK0fWsWfg'
    this.fetchGiphys(searchType, currentApiKey)
  },
  methods: {
    async fetchGiphys(searchType, apiKey) {
      try {
        const res = await getAllGiphys(searchType, apiKey)
        console.log(res)
      } catch(error) {
        console.log(error)
      } finally {
        console.log('finally')
      }
    }
  }
}
</script>

<style lang="scss" scoped>

</style>