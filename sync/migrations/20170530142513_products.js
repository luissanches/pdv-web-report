
exports.up = function (knex, Promise) {
    const vendas = knex.schema.createTableIfNotExists('VendasProdutos', (table) => {
        table.string('CodigoVenda').notNullable();
        table.string('CodigoVendaProduto').notNullable();
        table.decimal('ValorTotalVenda').notNullable();
        table.decimal('ValorTotalRecebimento').notNullable();
        table.dateTime('DataVenda');
        table.dateTime('DataRecebimento');
        table.string('CodigoDeBarra').notNullable();
        table.string('Descricao').notNullable();
        table.string('DescricaoBusca').notNullable();
        table.string('Categoria').notNullable();
        table.string('SubCategoria').notNullable();
        table.decimal('ValorDoProduto').notNullable();
    });

    return Promise.join(vendas);
};

exports.down = function (knex, Promise) {
    const vendas = knex.schema.dropTableIfExists('VendasProdutos');
    return Promise.join(vendas);
};
