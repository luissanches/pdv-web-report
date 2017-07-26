<template>
    <div>
        <div class="row justify-center items-center">
            <div class="card width-2of5 top100">
                <div class="card-title bg-primary text-white">
                    PDV SAT - Web Reports
                </div>
                <div class="card-content card-force-top-padding">
                    <div class="row">
                        <div class="floating-label">
                            <input required class="full-width" v-model="credential.login">
                            <label>Usuário</label>
                        </div>
                    </div>
                    <div class="row">
                        <div class="floating-label">
                            <input required class="full-width" type="password" v-model="credential.pws">
                            <label>Senha</label>
                        </div>
                    </div>
    
                </div>
                <div class="card-actions">
                    <button class="primary auto" @click="onEnter">
                        <i class="on-left">account_box</i> Entrar
                    </button>
                </div>
            </div>
        </div>
    </div>
</template>
    
<script>
import Vue from 'vue'
import utils from '../app/utils'
export default {
    mounted() {
        localStorage.removeItem('tokenid')
    },
    data() {
        return {
            credential: {
                login: '',
                pws: ''
            }
        }
    },
    methods: {
        onEnter() {
            if (this.$data.credential.login === 'pdvsat' && this.$data.credential.pws === '123') {
                let tokenid = utils.Token.toBase64('pdvsat123')
                Vue.http.headers.common['Authorization'] = tokenid
                localStorage.setItem('tokenid', tokenid)
                this.$router.replace('/')
            }
            else {
                utils.Toasts.negative('Usuário ou Senha inválidos.')
            }
        }
    }
}
</script>

<style scoped>
.top100 {
    top: 100px
}
</style>
