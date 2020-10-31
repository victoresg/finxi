<template>
  <div class="span-component" v-if="currentError">
    <span>{{ currentError }}</span>
  </div>
</template>

<script>
import formErrors from '@/helpers/formErrors'

export default {
  name: 'Alert',
  props: {
    v: {
      type: Object,
      required: true,
      default: () => ({})
    }
  },
  computed: {
    currentError () {
      const { v } = this
      return formErrors(v)
    },
    hasError () {
      const { currentError } = this
      return !!currentError
    }
  }
}
</script>

<style lang="css">

</style>