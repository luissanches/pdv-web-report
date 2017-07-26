<template>
    <div class="row justify-center">
        <div class="card width-5of5">
            <div class="card-content">
                <small class="light-paragraph">Data Inicial:</small>
                <q-datetime v-model="selectedDate.dtstart" type="date" format="DD/MM/YYYY" class="lspace" @input="onStartDateChanged"></q-datetime>
                <small class="light-paragraph lspace">Data Final: </small>
                <q-datetime v-model="selectedDate.dtend" type="date" format="DD/MM/YYYY" class="lspace" @input="onEndDateChanged"></q-datetime>
                <button class="circular deep-orange glossy small lspace" v-on:click="onSearch">
                    <i>search</i>
                </button>
            </div>
        </div>
    </div>
</template>searchedDate
<script>
import moment from 'moment'
let searchCallback = null
export default {
    computed: {
        selectedDate() {
            return this.$store.state.searchedDate
        }
    },
    methods: {
        onSearch() {
            if (searchCallback) {
                let dtStart = moment(this.$store.state.searchedDate.dtstart).format('YYYYMMDD')
                let dtEnd = moment(this.$store.state.searchedDate.dtend).format('YYYYMMDD')
                searchCallback(dtStart, dtEnd)
            }
        },
        onAttachSearchEvent(callback) {
            searchCallback = callback
        },
        onEndDateChanged(date) {
            this.$store.commit('changeSearchedEndDate', date)
        },
        onStartDateChanged(date) {
            this.$store.commit('changeSearchedStartDate', date)
        }
    }
}
</script>

<style scoped>
.lspace {
    margin-left: 20px;
}
</style>
