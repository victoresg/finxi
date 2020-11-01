<template>
  <main class="container">
    <div class="details">
      <div class="header-details" @click="goTo()">
        <i class="angle left icon"></i>
        <span>Início</span>
      </div>
      <h1>{{ objectDetails.title }}</h1>
      <img :src='objectDetails.images.downsized_large.url'>
    </div>
  </main>
</template>

<script>
import { getGiphysById } from '@/services/giphy'

export default {
  name: 'Details',

  data: () => ({
    objectDetails: {}
  }),

  created() {
    const { $route, detailsGiphy } = this
    detailsGiphy(this.$route.query._id)
  },

  methods: {
    async detailsGiphy(id) {
      const { $loading } = this
      const loader = $loading.show()
      try {
        const { data } = await getGiphysById(id)
        console.log({data})
        this.objectDetails = data 
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
  .details h1 {
    margin-bottom: 2rem;
  }
</style>