<template>
  <main>
    <div class="content p-3">
     <div>
       {{ teste1 }}
     </div>
    </div>
  </main>
</template>

<script>


export default {

  /*
    Vue JS = > SPA (Single Page Application). A renderização é feita no lado do cliente (browser), é feita toda a requisição dos arquivos CSS e JavaScript antes de nosso site estar de fato disponível para o usuário final. 
    Esse processo pode ser um pouco demorado, o que faz nosso site perder performance. Isso pode prejudicar o rankeamento de nosso projeto nos motores de busca dos navegadores. Por exemplo, 
    o Google recomenda que nosso site seja carregado em até 3 segundos para que tenha uma boa posição no ranking de busca.

    Nuxt JS => SSR (Server-Side Rendering). Essa abordagem define que toda a renderização de nosso site ocorrerá do lado do servidor. Isso significa que o nosso HTML, 
    incluindo as meta tags, nosso CSS e nosso JavaScript serão montados no servidor. Dessa forma, quando o browser requisitar uma página de nosso site, todo o conteúdo necessário já estará pronto 
    e será enviado para o usuário de uma só vez.
    
    O resultado será que nosso site aumentará em velocidade e será amigável para o motor de busca SEO (Search Engine Optimization).
  */

  name: 'Content',
  data: () => ({
    teste1: 'data()'
  }),

  beforeCreate() {
    console.log('beforeCreate()',  'test1:', this.teste1 )
    console.log('$el:', this.$el)
    // this._testFunc()
    // O beforeCreate é executado na inicialização do seu componente. data ainda não se tornou reativo e events ainda não foi configurado
  },

  created() {
    console.log('created()', 'test1:', this.teste1)
    console.log('$el:', this.$el)
    this._testFunc()
  },

  /* 
  Se uma instância do Vue não recebeu a "el" opção na instanciação, ela estará no estado “desmontado”, 
  sem um elemento DOM associado. vm.$el()pode ser usado para iniciar manualmente a montagem de uma instância 
  desmontada do Vue.
  */

  beforeMount() {
    console.log('beforeMount()')
    console.log('$el:', this.$el)
  },

  mounted() {
    console.log('mounted()')
    console.log('$el:', this.$el)
    this.teste1 = 'mounted()'
    //Para manipular o DOM diretamente se usa o hook mounted pra frente, pois antes disso ele não tem acesso ao mesmo.
  },

  beforeUpdate() {
    console.log('beforeUpdate()', this.teste1)
    /*
      O beforeUpdate é executado depois que os dados são alterados em seu componente e o ciclo 
      de atualização começa, logo antes de o DOM ser corrigido e renderizado novamente.

      Use beforeUpdate se precisar obter o novo estado de quaisquer dados reativos em 
      seu componente antes de realmente ser renderizado
    */
  },

  updated() {
    console.log('updated()', this.teste1)
    /*
      O updated é executado depois que os dados são alterados em seu componente e o DOM é renderizado novamente.

      Use updated se precisar acessar o DOM após uma alteração de propriedade
    */
  },

  beforeDestroy(){
    console.log('beforeDestroy()')
    console.log('$el:', this.$el)
    // Nesse ponto, os observadores, os componentes filhos e os ouvintes de eventos ainda não foram desativados.
  },

  destroyed() {
    console.log('destroyed()')
    console.log('$el:', this.$el)
    // Neste ponto, observadores, componentes filho e ouvintes de eventos foram desativados
  },

  /*
    Existem dois outros ganchos activated e deactivated. Eles são para keep-alive componentes.

    É suficiente dizer que eles permitem que você detecte quando um componente que está envolvido em uma <keep-alive></keep-alive> tag é ativado ou desativado. 
    Você pode usá-los para buscar dados para o seu componente ou lidar com as alterações de estado, comportando-se efetivamente como created e beforeDestroy sem a 
    necessidade de reconstruir totalmente o componente.
  */

  methods: {
    _testFunc() {
      console.log('evento_teste1')
      this.$emit('evento_teste1')
    }
  }
}
</script>

<style lang="scss" scoped>

</style>