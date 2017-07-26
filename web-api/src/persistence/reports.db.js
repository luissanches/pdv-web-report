const db = require('./database');

let persistence = {
        getTotalSaleByPayment(msg) {
        let filter = [msg.dtstart, msg.dtend];
        return db.knexPg('VendasPagamentos')
            .select('NomePagamento as nomepagamento')
            .sum('ValorTotalVenda as totalvenda')
            .sum('ValorTotalRecebimento as totalrecebimento')
            .groupBy('NomePagamento')
            .whereBetween('DataVenda', filter)
            .catch(error => {
                console.error('### Error ');
                throw Error('Error to geting Total Sales by Payments');
            });
    },
    getTotalReceiveAmmount(msg) {
        let filter = [msg.dtstart, msg.dtend];
        return db.knexPg('VendasPagamentos')
            .select('NomePagamento as nomepagamento')
            .sum('ValorTotalRecebimento as totalrecebimento')
            .groupBy('NomePagamento')
            .whereBetween('DataRecebimento', filter)
            .catch(error => {
                console.error('### Error ');
                throw Error('Error to geting Total Receive Ammount by Payments');
            });
    },
    getReceiveAmmount(msg) {
        let filter = [msg.dtstart, msg.dtend];
        return db.knexPg('VendasPagamentos')
            .select('DataRecebimento as datarecebimento', 'NomePagamento as nomepagamento')
            .sum('ValorTotalRecebimento as valortotalrecebimento')
            .whereBetween('DataRecebimento', filter)
            .groupBy('DataRecebimento','NomePagamento')
            .orderBy('DataRecebimento','asc')
            .catch(error => {
                console.error('### Error ');
                throw Error('Error to geting Total Receive Ammount by Payments');
            });
    },
    getProductsSales(msg) {
        let filter = [msg.dtstart, msg.dtend];
        return db.knexPg('VendasProdutos')
            .select('Descricao as descricao', db.knexPg.raw('count(*) as qtde'))
            .sum('ValorDoProduto as valordoproduto')
            .whereBetween('DataVenda', filter)
            .groupBy('Descricao')
            .orderBy('Descricao','asc')
            .catch(error => {
                console.error('### Error ');
                throw Error('Error to geting Total Receive Ammount by Payments');
            });
    },
    getCategoriesSales(msg) {
        let filter = [msg.dtstart, msg.dtend];
        return db.knexPg('VendasProdutos')
            .select('Categoria as categoria', db.knexPg.raw('count(*) as qtde'))
            .sum('ValorDoProduto as valordoproduto')
            .whereBetween('DataVenda', filter)
            .groupBy('Categoria')
            .orderBy('Categoria','asc')
            .catch(error => {
                console.error('### Error ');
                throw Error('Error to geting Total Receive Ammount by Payments');
            });
    }
}

module.exports = persistence;