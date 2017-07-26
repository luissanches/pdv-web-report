
exports.up = function (knex, Promise) {
    const vendas = knex.schema.createTableIfNotExists('VendasPagamentos', (table) => {
        table.string('CodigoVenda').notNullable();
        table.string('OperacaoCaixa_CodigoOperacaoCaixa').notNullable();
        table.string('Usuario_CodigoUsuario').notNullable();
        table.decimal('ValorTotalVenda').notNullable();
        table.decimal('ValorTotalDescontoVenda');
        table.decimal('ValorTotalRecebimento');
        table.dateTime('DataRecebimento').notNullable();
        table.dateTime('DataVenda').notNullable();
        table.string('CpfCnpjCliente');
        table.string('NomeCliente');
        table.decimal('ValorTroco');
        table.string('CFOP');
        table.string('CodigoVendaPagamento').notNullable();
        table.string('TipoPagamento_CodigoTipoPagamento').notNullable();
        table.decimal('ValorPagamento');
        table.string('NomePagamento').notNullable();
        table.decimal('PercentualDesconto');
        table.integer('DiasParaPagamento');
    });

    return Promise.join(vendas);
};

exports.down = function (knex, Promise) {
    const vendas = knex.schema.dropTableIfExists('VendasPagamentos');
    return Promise.join(vendas);
};
