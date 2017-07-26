const db = require('./database');
const log = require('../utils/log');

module.exports = {
    getToSync(limit) {
        let filter = {};
        filter['vp.Sincronizado'] = 0;
        return db.knexSqlite.select('v.CodigoVenda as CodigoVenda',
            'v.OperacaoCaixa_CodigoOperacaoCaixa as OperacaoCaixa_CodigoOperacaoCaixa',
            'v.Usuario_CodigoUsuario as Usuario_CodigoUsuario',
            'v.ValorTotalVenda as ValorTotalVenda',
            'v.ValorTotalDescontoVenda as ValorTotalDescontoVenda',
            'v.ValorTotalRecebimento as ValorTotalRecebimento',
            'v.DataRecebimento as DataRecebimento',
            'v.DataVenda as DataVenda',
            'v.CpfCnpjCliente as CpfCnpjCliente',
            'v.NomeCliente as NomeCliente',
            'v.ValorTroco as ValorTroco',
            'v.CFOP as CFOP',
            'vp.CodigoVendaPagamento as CodigoVendaPagamento',
            'vp.TipoPagamento_CodigoTipoPagamento as TipoPagamento_CodigoTipoPagamento',
            'vp.ValorPagamento as ValorPagamento',
            'tp.Nome as NomePagamento',
            'tp.PercentualDesconto as PercentualDesconto',
            'tp.DiasParaPagamento as DiasParaPagamento')
            .from('Venda as v')
            .innerJoin('VendaPagamento as vp', 'v.CodigoVenda', 'vp.Venda_CodigoVenda')
            .innerJoin('TipoPagamento as tp', 'vp.TipoPagamento_CodigoTipoPagamento', 'tp.CodigoTipoPagamento')
            .where(filter).limit(limit)
            .catch((error) => {
                log.error(error);
                throw Error('Error to try to get sales');
            })
    },
    updateSyncronized(salePaymentId) {
        let data = { Sincronizado: 1 };
        let filter = { CodigoVendaPagamento: salePaymentId }
        return db.knexSqlite('VendaPagamento').update(data)
            .where(filter)
            .catch((error) => {
                log.error(error.message);
                throw Error('Error to trying update syncronized sale payment');
            })
    },
    sync(data) {
        return db.knexPg('VendasPagamentos')
            .insert(data)
            .catch((error) => {
                log.error(error.message);
                throw Error('Error to trying syncronize')
            })
    },
    rollbackSync(salePaymentId) {
        let data = { Sincronizado: 0 };
        let filter = { CodigoVendaPagamento: salePaymentId }
        return db.knexSqlite('VendaPagamento')
            .update(data)
            .where(filter).then(async () => {
                await db.knexPg('VendasPagamentos').delete().where(filter);
            })

    }
}