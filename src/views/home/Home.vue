<template>
  <main class="container">
    <div class="home">
      <div class="ui stackable four column grid">
        <div class="column" v-for="({ id, images: { downsized_large: { url } } }, index) in items" :key="index">
          <div class="card" @click="goTo(id)">
            <img :src='url'>
          </div>
        </div>
      </div>
    </div>
  </main>
</template>

<script>
import { getFooGiphys } from '@/services/giphy'
import { mapState, mapActions } from 'vuex'

export default {
  name: 'Home',

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
      const { $loading, list } = this
      const loader = $loading.show()
      try {
        const { data } = await getFooGiphys(list)
        this.items = data
        loader.hide()
      } catch(error) {
        console.log(error)
      } finally {
        loader.hide()
      }
    },

    goTo(id) {
      const { $router } = this
      $router.push({
        name: 'Details',
        query: { _id: id }
      })
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
  main .home {
    padding: 150px 0 200px 0;
  }
  main .home .grid .column {
    display: flex;
    justify-content: center;
    align-items: center;
  }
  main .home .grid .column .card {
    cursor: pointer;
  }
  main .home .grid .column .card img {
    width: 200px;
  }

  /* responsive */

  @media(max-width: 1200px) {
    main .home {
      padding: 120px 0;
    }
    main .home .grid .column .card img {
      width: 100%;
    }
  }
</style>