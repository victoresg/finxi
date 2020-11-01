<template>
  <main class="container">
    <div class="details">
      <div class="header-details" @click="goTo()">
        <i class="angle left icon"></i>
        <span>Início</span>
      </div>
      <h1>{{ detailsGiphys.title }}</h1>
      <div class="content-details">
        <img :src='giphyImage' width="300">
        <div class="content-info">
          Nome do usuário: {{ detailsGiphys.username }}
          <div class="trending-datetime">
            <span class="date">Data: {{ formatDate(detailsGiphys.trending_datetime) }}</span>
            <span class="time">Hora: {{ formatHours(detailsGiphys.trending_datetime) }}</span>
          </div>
        </div>
      </div>
    </div>
  </main>
</template>

<script>
import { getGiphysById } from '@/services/giphy'
import { formatDate, formatHours } from '@/helpers/date'

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
        console.log(data)
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
    },
    formatDate (date) {
      return formatDate(date)
    },
    formatHours (date) {
      return formatHours(date)
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
    font-size: 20px;
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
  .details .date-time {
    font-size: 30px;
  }
  .details .content-details {
    display: flex;
  }
  .details .content-details img {
    margin-right: 1rem;
  }
  .details .content-details .content-info {
    margin: 15px 0;
    display: flex;
    flex-direction: column;
    align-items: flex-start;
  }
  .details .content-details .content-info .trending-datetime {
    display: flex;
    flex-direction: column;
  }

  /* responsiive */

  @media(max-width: 768px) {
    .details .content-details img {
      margin-right: 0;
    }
    .details .content-details {
      flex-direction: column;
    }
    .details .content-details .content-info {
      align-items: center;
    }
  }
</style>