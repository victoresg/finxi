<template>
  <main class="container">
    <div class="details">
      <div class="header-details" @click="goTo()">
        <img src='../../assets/left-arrow.png' width="30">
        <span>Início</span>
      </div>
      <h1>{{ detailsGiphys.title }}</h1>
      <div class="content-details">
        <img :src='giphyImage' width="300">
        <div class="content-info">
          Nome do usuário: {{ detailsGiphys.username ? detailsGiphys.username : empityField}}
          <div class="import-datetime">
            <span class="date">Data: {{ formatDate(detailsGiphys.import_datetime) }}</span>
            <span class="time">Hora: {{ formatHours(detailsGiphys.import_datetime) }}</span>
          </div>
          <div class="content-link">
            Achou pouco? 
            <a :href="detailsGiphys.url" target="_blank">
              clique aqui
            </a>
            para ver mais giphys {{ extractGiphyName(detailsGiphys.title) }}.
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
    giphyImage: '',
    empityField: 'Nenhum registro'
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
        setTimeout(() => {
          loader.hide()
        }, 1000)
      } catch(error) {
        console.log(error)
      }
    },
    goTo() {
      const { $router } = this
      $router.push({
        name: 'Home'
      })
    },
    formatDate (date) {
      if(date === undefined || date === '0000-00-00 00:00:00') return this.empityField
      return formatDate(date)
    },
    formatHours (date) {
      if(date === undefined || date === '0000-00-00 00:00:00') return this.empityField
      return formatHours(date)
    },
    extractGiphyName(name) {
      if(name === undefined) return this.empityField
      return name.split('GIF')[0]
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
  .details .header-details img {
    margin-right: 1rem;
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
  .details .content-details .content-info a {
    color: #bdb81d;
    outline: none;
  }
  .details .content-details .content-info .import-datetime {
    display: flex;
    flex-direction: column;
  }

  /* responsiive */

  @media(max-width: 768px) {
    .details h1  {
      font-size: 25px;
      margin-top: 2rem;
    }
    .details .content-details img {
      margin-right: 0;
    }
    .details .content-details {
      align-items: center;
      flex-direction: column;
    }
    .details .content-details .content-info {
      align-items: center;
    }
    .details .content-details .content-info .content-link {
      text-align: center;
    }
  }
</style>