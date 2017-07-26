<template>
  <div class="auto scroll">
    <div class="row justify-center margin-top30">
      <span class="label bg-secondary text-white shadow-1">Total de Recebimentos</span>
    </div>
    <div class="row justify-center margin-top10">
      <c-date-range></c-date-range>
    </div>
    <div class="row justify-center margin-top30" v-show="sales.length>0">
      <div class="card width-3of5 auto">
        <div class="card-title bg-primary text-white">
          Recebimentos
        </div>
        <div class="card-content card-force-top-padding">
          <table class="q-table responsive">
            <thead>
              <tr>
                <th>Tipo Pagamento</th>
                <th>Valor Recebimento</th>
              </tr>
            </thead>
            <tbody>
              <tr v-for="sale in sales">
                <td>{{sale.nomepagamento}}</td>
                <td>{{sale.totalrecebimento | formatCurrency}}</td>
              </tr>
            </tbody>
          </table>
        </div>
        <div class="card-actions  justify-center">
          <span class="label bg-secondary text-white">
            <h6>Total A Receber: {{totalreceivements | formatCurrency}}</h6>
          </span>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import cDateRange from '../common/DateRange'
export default {
  data() {
    return {
      sales: [],
      totalreceivements: 0
    }
  },
  mounted() {
    cDateRange.methods.onAttachSearchEvent(this.onSearched)
  },
  components: {
    cDateRange
  },
  methods: {
    onSearched(dateStart, dateEnd) {
      let url = `reports/totalreceivebypayments/${dateStart}/${dateEnd}`
      this.$http.get(url).then(response => {
        console.log(response)
        this.$data.sales = response.body

        let totalrecebimento = 0

        for (let sale of this.$data.sales) {
          totalrecebimento += parseInt(sale.totalrecebimento)
        }

        this.$data.totalreceivements = totalrecebimento
      })
    }
  }
}
</script>

<style scoped>

</style>I
