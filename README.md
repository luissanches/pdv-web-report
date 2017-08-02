# PDV-WEB-REPORT

#### Descrição
```
Relatórios Web para o PDV-SAT. Sistema Web criado utilizando VueJS e Quasar-Framework com o propósito de ajudar 
o comerciante a visualizar de forma on-line a desempenho do seu SAT-PDV.
```


#### Motivação
```
Com a obrigatoriedade da utilização do Sistema Autenticador e Transmissor de Cupons Fiscais Eletrônicos (SAT)
para comerciantes varejistas do Estado de São, eu quis entender e criar uma ferramenta open source
para ajudar pequenos contribuintes e desenvolvedores que necessitem usar esse ecossistema
sem ser necessário grandes investimentos. 
```

#### Funcionalidades
```
- Área restrita com controle de acesso
- Aplicação responsiva
- Relatório de Vendas do Período
- Relatório de Recebimentos do Período
- Relatório de Recebimentos Detalhados do Período
- Relatório de Vendas por Categoria do Período
- Relatório de Vendas por Produto do Período
```

#### Módulos e Tecnologias
```
- SINCRONIZADOR (syncronizer) - Acionado pelo PDV-SAT, transfere as vendas do Pdv-Sat Sqlite para PostgreSql On-line. 
    - NodeJs
    - KnexJs
    - Sqlite
    - PostgreSql
- WEB API (web-api) - Api Restful para recuperar os dados das vendas no PostgreSql. 
    - NodeJs
    - KoaJs
    - KnexJs
    - PostgreSql
- WEB APP  (web-app) - Aplicação Web Single Page App (SPA) 
    - NodeJs
    - VueJs
    - Vuex
    - Vue-router
    - Vue-resource
    - Quasar-Framework
```

#### Configuração para desenvolvimento
Acessar diretório do módulo Web App
```sh
$ npm install
$ qasar dev //necessário configurar arquivo main.js (Vue.http.options.root = 'http://[ip da web api]:3000/')
```

Acessar diretório do módulo Sincronizador
```sh
$ npm install
$ npm knex migrate:latest //necessário configurar o arquivo knefile.js (informações de acesso)
$ node app.js
```

Acessar diretório do módulo Web Api
```sh
$ npm install
$ cd src
$ node app.js //necessário configurar arquivo /persistence/database.js (informações de acesso)
```


## Prints

#### Login: 
![](https://github.com/luissanches/pdv-web-report/blob/master/misc/printscreen/login.png)
=============


#### Relatório de Vendas do Período: 
![](https://github.com/luissanches/pdv-web-report/blob/master/misc/printscreen/total_venda.png)
=============


#### Relatório de Recebimentos do Período: 
![](https://github.com/luissanches/pdv-web-report/blob/master/misc/printscreen/total_a_receber.png)
=============


#### Relatório de Recebimentos Detalhados do Período: 
![](https://github.com/luissanches/pdv-web-report/blob/master/misc/printscreen/detalhe_recebimento.png)
=============


#### Relatório de Vendas por Categoria do Período: 
![](https://github.com/luissanches/pdv-web-report/blob/master/misc/printscreen/vendas_por_categoria.png)
=============


#### Relatório de Vendas por Produto do Período: 
![](https://github.com/luissanches/pdv-web-report/blob/master/misc/printscreen/venda_por_produto.png)
=============



