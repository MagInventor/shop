<template>
  <header>
    <header-elements/>
    <nav-menu/>
    <currency-exchange
      :selected="selected"
      :options="categories"
      @select="chooseCategory"
    />
  </header>
</template>

<script>
import HeaderElements from './HeaderElements'
import NavMenu from './NavMenu'
import CurrencyExchange from './CurrencyExchange'
import {mapActions} from 'vuex'

export default {
  name: 'TheHeader',
  components: {
    HeaderElements, NavMenu, CurrencyExchange
  },
  props: {},
  data() {
    return {
      categories: [
        {name: 'PLN', value: 'PLN'},
        {name: 'USD', value: 'PLNUSD'},
        {name: 'EUR', value: 'PLNEUR'},
      ],
      selected: 'PLN',
    }
  },
  computed: {},
  methods: {
    ...mapActions([
      'GET_CURRENCY_FROM_API',
      'CHOOSE_CURRENCY',
    ]),
    getExchangeRate(currency) {
      this.CHOOSE_CURRENCY(currency)
    },
    chooseCategory(category) {
      this.getExchangeRate(category.value || 'PLN')

      this.selected = category.name
      return this.selected
    }
  },
  mounted() {
    this.GET_CURRENCY_FROM_API()
  }
}
</script>

<style>
header {
  margin-bottom: 20px;
  height: 110px;
  display: grid;
  grid-template-rows: 1fr 1fr;
}

.heading .container {
  display: grid;
  grid-template-columns: 120px auto;
  align-items: center;
}
</style>
