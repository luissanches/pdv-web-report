<template>
  <!-- Don't drop "q-app" class -->
  <div id="q-app">
    <router-view></router-view>
  </div>
</template>

<script>
import ccMain from './components/Main'
import ccLogin from './components/Login'
import { Loading } from 'quasar'

import Vue from 'vue'
export default {
  mounted() {
    Vue.http.interceptors.push(function (request, next) {
      Loading.show()
      next(function (response) {
        Loading.hide()
      });
    });
  },
  components: {
    ccMain,
    ccLogin
  }
}
</script>

<style></style>
