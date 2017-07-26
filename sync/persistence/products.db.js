const db = require('./database');
const log = require('../utils/log');

module.exports = {
    getToSync(limit) {
        let filter = {};
        filter['vp.Sincronizado'] = 0;
        return db.knexSqlite.select('v.CodigoVenda as CodigoVenda',
            'vp.CodigoVendaProduto as CodigoVendaProduto',
            'v.ValorTotalVenda as ValorTotalVenda',
            'v.ValorTotalRecebimento as ValorTotalRecebimento',
            'v.DataVenda as DataVenda',
            'v.DataRecebimento as DataRecebimento',
            'p.CodigoDeBarra as CodigoDeBarra',
            'p.Descricao as Descricao',
            'p.DescricaoBusca as DescricaoBusca',
            'p.Categoria as Categoria',
            'p.SubCategoria as SubCategoria',
            'vp.ValorDoProduto as ValorDoProduto')
            .from('Venda as v')
            .innerJoin('VendaProduto as vp', 'v.CodigoVenda', 'vp.Venda_CodigoVenda')
            .innerJoin('Produto as p', 'vp.Produto_CodigoDeBarra', 'p.CodigoDeBarra')
            .where(filter).limit(limit)
            .catch((error) => {
                log.error(error);
                throw Error('Error to try to get products');
            })
    },
    updateSyncronized(saleProductId) {
        let data = { Sincronizado: 1 };
        let filter = { CodigoVendaProduto: saleProductId }
        return db.knexSqlite('VendaProduto').update(data)
            .where(filter)
            .catch((error) => {
                log.error(error.message);
                throw Error('Error to trying update syncronized sale payment');
            })
    },
    sync(data) {
        return db.knexPg('VendasProdutos')
            .insert(data)
            .catch((error) => {
                log.error(error.message);
                throw Error('Error to trying syncronize')
            })
    },
    rollbackSync(saleProductId) {
        let data = { Sincronizado: 0 };
        let filter = { CodigoVendaProduto: saleProductId }
        return db.knexSqlite('VendaProduto')
            .update(data)
            .where(filter).then(async () => {
                await db.knexPg('VendasProdutos').delete().where(filter);
            })

    }
}