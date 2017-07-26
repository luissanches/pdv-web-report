import Vue from 'vue'
import moment from 'moment'
import currencyFormatter from 'currency-formatter'

Vue.filter('formatDate', function(value) {
  if (value) {
    return moment(String(value)).format('MM/DD/YYYY')
  }
})

Vue.filter('formatDate', function(value) {
  if (value) {
    return moment(String(value)).format('MM/DD/YYYY')
  }
})

Vue.filter('formatCurrency', function(value) {
  if (value) {
    return currencyFormatter.format(value, { locale: 'pt-BR' })
  }
})
