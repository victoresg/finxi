<template>
  <div class="modal" v-if="show">
    <div class="content">
      <div class="body d-flex flex-column justify-content-center">
        <div class="d-flex flex-column">
          <div class="d-flex justify-content-between align-items-center flex-row-reverse"> 
            <button @click="closeModal" class="mb-3 close-btn">x</button>
            <span class="mb-3">ADDITIONAL NOTES</span>
          </div>
          <label for="todoitem">Todo Item</label>
          <textarea 
            id="todoitem"
            rows="8" 
            cols="80"
            placeholder="e.g Good Tech Company"
            v-model="input"
            class="p-2"
          >
          </textarea>
        </div>
        <div class="row d-flex justify-content-end mt-5">
          <button @click="add" class="col-md-2 p-1 mr-3 modal-btn">SAVE</button>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import { mapState, mapActions } from 'vuex'

export default {
  name: 'Modal',
  props: {
    show: {
      type: Boolean,
      default: () => true
    }
  },
  data: () => ({
    currentList: [],
    input: ""
  }),
  created() {
    this.currentList = this.list
  },
  computed: {
    ...mapState(['list'])
  },
  methods: {
    ...mapActions(['setList']),
    closeModal () {
      setTimeout(() => {
        this.$emit('close')
      }, 200)
    },
    add() {
      if (!this.input) {
        alert('Write something!')
        return
      }
      this.currentList.push(this.input)
      this.setList(this.currentList)
      this.input = ""
    }
  }
}
</script>