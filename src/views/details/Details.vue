<template>
  <main class="container">
    <div class="content">
        olá {{ objectDetails }}
    </div>
  </main>
</template>

<script>
import { getGiphysById } from '@/services/giphy'

export default {
  name: 'Details',

  data: () => ({
    objectDetails: []
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
        console.log(data)
        this.objectDetails = data 
        loader.hide()
      } catch(error) {
        console.log(error)
      } finally {
        loader.hide()
      }
    }
  }
}
</script>

<style lang="css" scoped>
  .content {
    color: #fff;
    font-size: 50px;
    display: flex;
    justify-content: center;
    align-items: center;
    padding: 200px 0;
  }
</style>