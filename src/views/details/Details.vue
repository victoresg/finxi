<template>
  <main class="container">
    <div class="details">
      <div class="header-details" @click="goTo()">
        <i class="angle left icon"></i>
        <span>Início</span>
      </div>
      <h1>{{ detailsGiphys.title }}</h1>
      <img :src='giphyImage'>
    </div>
  </main>
</template>

<script>
import { getGiphysById } from '@/services/giphy'

export default {
  name: 'Details',

  data: () => ({
    detailsGiphys: {},
    giphyImage: ''
  }),

  created() {
    const { $route, getDetailsGiphy } = this
    getDetailsGiphy(this.$route.query._id)
  },

  methods: {
    async getDetailsGiphy(id) {
      const { $loading } = this
      const loader = $loading.show()
      try {
        const { data } = await getGiphysById(id)
        this.detailsGiphys = data
        const { images: { downsized_large } } = data
        this.giphyImage = downsized_large.url
        loader.hide()
      } catch(error) {
        console.log(error)
      } finally {
        loader.hide()
      }
    },
    goTo() {
      const { $router } = this
      $router.push({
        name: 'Home'
      })
    }
  }
}
</script>

<style lang="css" scoped>
  .details {
    color: #fff;
    font-size: 50px;
    display: flex;
    justify-content: center;
    align-items: center;
    flex-direction: column;
    padding: 150px 0;
  }
  .details .header-details {
    display: flex;
    justify-content: flex-start;
    align-items: center;
    cursor: pointer;
    width: 100%;
  }
  .details .header-details span {
    font-size: 30px;
  }
  .details .header-details .icon {
    display: flex;
    justify-content: center;
    align-items: center;
  }
  .details h1 {
    margin-bottom: 2rem;
  }
</style>