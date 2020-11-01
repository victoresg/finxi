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
  .span-component {
    font-size: 12px;
    color: #bdb81d;
    width: 100%;
  }
  .span-component span {
    position: absolute;
  }

  /* responsivo */

  @media(max-width: 768px) {
    .span-component span {
      white-space: nowrap;
      left: 0;
    }
  }
</style>