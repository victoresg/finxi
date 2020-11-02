<template>
  <main class="container">
    <div v-if="forceReload" class="home">
      <div v-if="items.length > 1" class="ui stackable four column grid">
        <div class="column" v-for="({ id, show, images: { downsized_large: { url } } }, index) in items" :key="index">
          <div class="card" @click="goTo(id)">
            <img
              v-if="notFound"
              class="not-found"
              src='../../assets/not-found.png' 
              width="150"
            >
            <img
              v-else
              :src='url'
              @error="hideImgError(index)"
            >
          </div>
        </div>
      </div>
      <div v-else class="no-results">
        <p>
          Nenhum resultado obtido com "{{ list }}"!
        </p>
      </div>
    </div>
  </main>
</template>

<script>
import { getFooGiphys } from '@/services/giphy'
import { mapState } from 'vuex'

export default {
  name: 'Home',

  data: () => ({
    items: [],
    notFound: false,
    forceReload: true
  }),

  created() {
    const { fetchGiphys } = this

    fetchGiphys()
  },

  computed: {
    ...mapState(['list'])
  },

  methods: {
    async fetchGiphys() {
      const { $loading, list } = this

      this.forceReload = false
      const loader = $loading.show()
      try {
        const { data } = await getFooGiphys(list)
        this.items = data
        loader.hide()
      } catch(error) {
        // console.log(error)
      } finally {
        loader.hide()
        this.forceReload = true
      }
    },

    goTo(id) {
      const { $router, $v } = this
      
      $router.push({
        name: 'Details',
        query: { _id: id }
      })
    },

    hideImgError () {
      this.notFound = true
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
    height: 100%;
    width: 100%;
    display: flex;
    justify-content: center;
    align-items: center;
    background-color: #0000005c;
  }
  main .home .grid .column .card .not-found {
    z-index: 9;
  }
  main .home .grid .column .card::before {
    content: "loading...";
    font-size: 15px;
    font-weight: 900;
    color: #fff;
    position: absolute;
    right: 0;
    left: 0;
    bottom: 0;
    top: 0;
    display: flex;
    justify-content: center;
    align-items: center;
  }
  main .home .grid .column .card img {
    padding: 25px;
    width: 200px;
    z-index: 9;
  }
  main .home .no-results {
    position: absolute;
    display: flex;
    justify-content: center;
    align-items: center;
    right: 0;
    bottom: 0;
    top: 0;
    width: 100%;
  }
  main .home .no-results p {
    color: #fff;
    font-size: 30px;
    text-align: center;
    word-break: break-word;
    padding: 5px;
    display: -webkit-box;
    max-width: 400px;
    -webkit-line-clamp: 4;
    -webkit-box-orient: vertical;
    overflow: hidden;
    text-overflow: ellipsis;
    line-height: 2.8rem;
  }

  /* responsive */

  @media(max-width: 1200px) {
    main .home {
      padding: 120px 0;
    }
    main .home .grid .column .card img {
      width: 100%;
    }
    @media(max-width: 768px) {
      main .home .no-results p {
        font-size: 15px;
      }
    }
  }
</style>