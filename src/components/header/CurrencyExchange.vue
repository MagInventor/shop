<template>
  <div class="currency-exchange">
    <div class="container">
      <div class="currency-current">
      <p
        class="currency-current-select__title"
        @click="areOptionsVisible = !areOptionsVisible"
      >{{selected}}</p>
      <div
        class="currency-current-select__options"
        v-if="areOptionsVisible"
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
.currency-exchange .container {
  position: relative;
}

.currency-current {
  width: 40px;
  font-size: 10px;
  text-transform: uppercase;
  color: #fff;
  position: absolute;
  top: -32px;
  right: 50px;
}

.currency-current select {
  cursor: pointer;
}

.currency-current-select__title,
.currency-current-select__options {
  width: 28px;
  height: 14px;
  padding: 2px 3px 2px 4px;
  font-size: 12px;
  background: #fff;
  color: #000;
  cursor: pointer;
}

.currency-current-select__title {
  background: #ffc18e;
}

.currency-current-select__options p:hover {
  background: #ca4e79;
  color: #fff;
}

</style>
