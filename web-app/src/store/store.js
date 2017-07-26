import Vuex from 'vuex'
import moment from 'moment'

export default new Vuex.Store({
    state: {
        searchedDate: {
            dtstart: moment().format(),
            dtend: moment().format()
        }
    },
    mutations: {
        changeSearchedStartDate(state, payload) {
            state.searchedDate.dtstart = payload
        },
        changeSearchedEndDate(state, payload) {
            state.searchedDate.dtend = payload
        }
    }
})
