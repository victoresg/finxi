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

<style lang="scss" scoped>
  .modal {
    position: fixed;
    top: 0;
    right: 0;
    bottom: 0;
    left: 0;
    display: block;
    background-color: #00000059;
    .content {
      display: flex;
      justify-content: center;
      align-items: center;
      height: 100vh;
      .body {
        background-color: #ffff;
        padding: 1rem 5rem;
        border-radius: 5px;
        span {
          font-size: 14px;
          color: #808080d9;
        }
        textarea {
          border-radius: 5px;
          outline-style: none;
          border: 1px #00000047 solid;
        }
        .close-btn {
          background-color: transparent;
          border: none;
          color: #808080d9;
          outline-style: none;
        }
      }
    }
    &-btn {
      background-color: #5d699a;
      border-radius: 5px;
      border: none;
      color: #ffff; 
      outline-style: none;
      cursor: pointer;
      &:active {
        box-shadow: inset 0 0 1em #1d21249e, 0 0 1em #1d21243d;
      }
    }
  }
  @media(max-width: 768px) {
    .modal {
      .body {
        max-width: 25rem;
      }
    }
  }
 </style>