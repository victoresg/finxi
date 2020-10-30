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

<style lang="scss">
  .tabs {
    cursor: pointer;
    h6 {
      border: 1px #1d21242e solid;
      padding: 1rem;
    }
    h6:nth-child(1) {
      margin-bottom: -1px;
    }
    h6:nth-child(2) {
      margin-bottom: 8px;
    }
    .list-item {
      min-width: 10.1rem;
    }
  }
</style>