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

<style lang="scss">
  .span-component {
    position: relative;
    font-size: 12px;
    span {
      position: absolute;
      left: 0;
      color: #ff0000b5;
      top: -2px;
    }
  }
</style>