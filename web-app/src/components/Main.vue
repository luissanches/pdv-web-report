<template>
    <q-layout>
        <q-drawer ref="drawer">
            <div class="list platform-delimiter">
                <q-drawer-link icon="functions" to="/totalsales">Total de Vendas</q-drawer-link>
                <q-drawer-link icon="functions" to="/totalreceivements">Total de Recebimentos</q-drawer-link>
                <q-drawer-link icon="functions" to="/detailreceivements">Detalhe de Recebimentos</q-drawer-link>
                <q-drawer-link icon="functions" to="/categorysales">Venda Categorias</q-drawer-link>
                <q-drawer-link icon="functions" to="/productsales">Venda Products</q-drawer-link>
                <q-drawer-link icon="exit_to_app" to="/login" @click="onLogout">Exit</q-drawer-link>
            </div>
        </q-drawer>
        <div slot="header" class="toolbar">
            <button class="hide-on-drawer-visible" @click="$refs.drawer.open()">
                <i>menu</i>
            </button>
            <q-toolbar-title :padding="2">
                Relatórios PDV SAT
            </q-toolbar-title>
            <button>
                <i>mail</i>
            </button>
            <button>
                <i>alarm</i>
            </button>
        </div>
        <router-view></router-view>
    </q-layout>
</template>

<script>
import Vue from 'vue'

export default {
    beforeMount() {
        let tokenid = localStorage.getItem('tokenid')
        if (!tokenid) {
            this.$router.replace('/login')
        }
        else {
            Vue.http.headers.common['Authorization'] = tokenid
            this.$router.replace('/totalsales')
        }
    },
    mounted() {
    },
    methods: {
        onLogout() {
            localStorage.removeItem('tokenid')
        }
    }
}
</script>

<style>
.padding {
  padding: 8px 10px 0 10px;
}

.margin-top30 {
  margin-top: 30px;
}

.margin-top10 {
  margin-top: 10px;
}
</style>
