import Vue from 'vue';

document.addEventListener('DOMContentLoaded', () => {
  new Vue({
    el: "#app",
    data: {
      currencies: [],
      selectedCurrency: null,
      newAmount: ""
    },
    computed: {

      totalAmount: function(){
        return this.amount.reduce((runningTotal, amount) => runningTotal + amount.balance, 0); // MODIFIED
      }

          },

      mounted(){
        this.getCurrencies();
      },

    methods: {
      getCurrencies: function (){
        fetch('https://api.exchangeratesapi.io/latest')
        .then(response => response.json())
        .then(currencies => this.currencies = currencies)
      },

    }

  });
});
