// import axios from 'axios'
import apiKeys from '../../constants/apiKeys.constant'

export default {
  state: {
    currency: [],
    quoteCurrency: 1
  },
  mutations: {
    SET_CURRENCY_TO_STATE:(state, currency) => {
      state.currency = currency
    },
    SET_CURRENT_CURRENCY: (state, currency) => {
      for (let quote in state.currency.quotes) {
        if (quote === currency) {
          state.quoteCurrency = state.currency.quotes[quote]
        }
        if (currency === 'PLN') {
          state.quoteCurrency = 1
        }
      }
      return state.quoteCurrency
    }
  },
  actions: {
    GET_CURRENCY_FROM_API({commit}) {
    // const myHeaders = new Headers();
    // myHeaders.append("apikey", apiKeys.Currency);

    // const requestOptions = {
    //   method: 'GET',
    //   redirect: 'follow',
    //   headers: myHeaders
    // };

    // return fetch("https://api.apilayer.com/currency_data/live?source=PLN&currencies=USD%2C%20EUR", requestOptions)
    //   .then(response => response.text())
    //   .then(result => {
    //     console.log(result)
    //     commit('SET_CURRENCY_TO_STATE', JSON.parse(result))
      // })
      // .catch(error => console.log('error', error));

      return axios('http://localhost:3000/currency', {
        method: "GET"
      })
      .then(result => {
        // console.log(result.data[0])
        commit('SET_CURRENCY_TO_STATE', result.data[0])
      })
      .catch(error => console.log('error', error))
    },
    CHOOSE_CURRENCY({commit}, currency) {
      commit('SET_CURRENT_CURRENCY', currency)
    }
  },
  getters: {
    CURRENCY(state) {
      return state.currency
    },
    QUOTE(state) {
      return state.quoteCurrency
    }
  }
}
