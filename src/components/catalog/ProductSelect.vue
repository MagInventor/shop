<template>
  <div class='product-select'>
    <p
        class="poduct-select__title"
        @click="areOptionsVisible = !areOptionsVisible"
    >{{selected}}</p>
    <div
        class="product-select__options"
        v-if="areOptionsVisible || isExpanded"
    >
      <p
          v-for="option in options"
          :key="option.value"
          @click="selectOption(option)"
      >
        {{option.name}}
      </p>
    </div>
  </div>
</template>

<script>
  export default {
    name: "ProductSelect",
    props: {
      options: {
        type: Array,
        default() {
          return []
        }
      },
      selected: {
        type: String,
        default: ''
      },
      isExpanded: {
        type: Boolean,
        default: false
      }
    },
    data() {
      return {
        areOptionsVisible: false
      }
    },
    methods: {
      selectOption(option) {
        this.$emit('select', option)
        this.areOptionsVisible = false;
      },
      hideSelect() {
        this.areOptionsVisible = false;
      }
    },
    mounted() {
      document.addEventListener('click', this.hideSelect.bind(this), true)
    }
  }
</script>

<style>
.product-select {
  position: relative;
  width: 200px;
  cursor: pointer;
  text-align: left;
}

.product-select__title {
  border: solid 1px #aeaeae;
  padding: 8px;
}

.product-select p {
  margin: 0;
}

.product-select__options {
  border: solid 1px #aeaeae;
  background: #ffffff;
  position: absolute;
  top: 30px;
  left: 0;
  width: 91%;
  padding: 8px;
}

.product-select__options p:hover {
  background: #e7e7e7;
}
</style>
