<template>
  <main class="container">
    <div class="content">
      <div class="ui stackable four column grid">
        <div class="column" v-for="(item, index) in items" :key="index">
          <img :src='item.images.downsized_large.url'>
        </div>
      </div>
    </div>
  </main>
</template>

<script>
import { getFooGiphys } from '@/services/giphy'
import { mapState, mapActions } from 'vuex'

export default {
  name: 'Content',

  data: () => ({
    items: []
  }),

  created() {
    this.fetchGiphys()
  },

  computed: {
    ...mapState(['list'])
  },

  methods: {
    async fetchGiphys(searchType, apiKey) {

      const { $loading } = this
      const loader = $loading.show()
      const { list } = this
      const currentApiKey = 'TtLIWxlcNtvlFm0s0ufFy2SpK0fWsWfg'

      try {
        const { data } = await getFooGiphys(list, currentApiKey)
        this.items = data
        loader.hide()
      } catch(error) {
        console.log(error)
      } finally {
        loader.hide()
      }
    }
  },

  watch: {
    'list': function() {
      this.fetchGiphys()
    }
  }
}
</script>

<style lang="css" scoped>
  main .content {
    padding: 150px 0 200px 0;
  }
  main .content .grid .column {
    display: flex;
    justify-content: center;
    align-items: center;
  }
  main .content .grid .column img {
    width: 200px;
  }

  /* responsive */

  @media(max-width: 1200px) {
    main .content {
      padding: 120px 0;
    }
    main .content .grid .column img {
      width: 100%;
    }
  }
</style>