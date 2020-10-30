<template>
  <div class="tab-content d-flex justify-content-center align-items-center" v-if="show">
    <slot></slot>
  </div>
</template>

<script>
export default {
  name: 'Tab',
  props: {
    name: String,
    selected: String
  },
  computed: {
    show () {
      return window.innerWidth < 768 ? true : this.name === this.selected
    }
  }
}
</script>
