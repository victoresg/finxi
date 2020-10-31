<template>
  <div class="row tabs">
    <div class="list d-flex justify-content-start align-items-end flex-column col-md-4 p-5">
      <div class="list-item" v-for="(item, index) in items" :key="index" @click="emit(item.name)">
        <h6>{{ item.title }}</h6>
      </div>
    </div>
    <slot></slot>
  </div>
</template>

<script>

export default {
  name: 'Tabs',
  components: {
  },
  props: {
    items: Array,
    selected: String
  },
  methods: {
    emit (name) {
      this.$emit('onSelect', name)
    },
    isSelected (name) {
      return this.selected === name
    }
  }
}
</script>

<style lang="css">

</style>