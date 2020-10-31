<template>
  <main>
    <div class="content">
      <div v-for="(item, index) in items" :key="index" >
        <div>
          <img :src='item.images.downsized_large.url'>
        </div>
      </div>
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
    searchType: 'foo',
    items: []
  }),
  created() {
    const { searchType } = this
    const currentApiKey = 'TtLIWxlcNtvlFm0s0ufFy2SpK0fWsWfg'
    this.fetchGiphys(searchType, currentApiKey)
  },
  methods: {
    async fetchGiphys(searchType, apiKey) {
      try {
        const { data } = await getAllGiphys(searchType, apiKey)
        this.items = data
        console.log(data)
      } catch(error) {
        console.log(error)
      } finally {
        console.log('finally')
      }
    }
  }
}
</script>

<style lang="css" scoped>

</style>