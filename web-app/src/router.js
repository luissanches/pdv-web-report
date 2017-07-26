import Vue from 'vue'
import VueRouter from 'vue-router'

Vue.use(VueRouter)

import ccMain from './components/Main'
import ccLogin from './components/Login'
import ccError404 from './components/Error404'
import ccTotalVenda from './components/main/TotalVenda'
import ccTotalRecebimento from './components/main/TotalRecebimento'
import ccDetalheRecebimento from './components/main/DetalheRecebimento'
import ccVendaCategoria from './components/main/VendaCategoria'
import ccVendaProduto from './components/main/VendaProducts'

export default new VueRouter({
  routes: [
    {
      path: '/', component: ccMain, children: [
        {
          path: '/totalsales',
          component: ccTotalVenda
        },
        {
          path: '/totalreceivements',
          component: ccTotalRecebimento
        },
        {
          path: '/detailreceivements',
          component: ccDetalheRecebimento
        },
        {
          path: '/categorysales',
          component: ccVendaCategoria
        },
        {
          path: '/productsales',
          component: ccVendaProduto
        }
      ]
    },
    { path: '/login', component: ccLogin },
    { path: '*', component: ccError404 }
  ]
})
