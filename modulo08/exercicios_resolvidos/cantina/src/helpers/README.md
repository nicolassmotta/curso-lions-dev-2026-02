# Pasta `helper`

Esta pasta contém funções auxiliares (**helpers**) responsáveis por isolar lógicas específicas, cálculos e regras de apoio do sistema. 

O objetivo é manter os arquivos principais (como rotas e controllers) mais limpos, legíveis e fáceis de manter, evitando a repetição de código.

## O que deve ficar aqui?
* Funções puras que recebem dados, processam e retornam um resultado (ex: cálculo de preços, descontos, taxas).
* Regras de apoio específicas do domínio da aplicação (ex: regras de negócio de pedidos).
* Pequenas validações ou transformações de dados utilizadas antes de salvar ou retornar informações.

## O que NÃO deve ficar aqui?
* **Acesso direto ao banco de dados** (consultas do Mongoose devem ficar nos *Models*, *Repositories* ou *Services*).
* **Manipulação de requisições HTTP** (objetos `req` e `res` do Express pertencem aos *Controllers* ou *Middlewares*).
* **Configurações globais** (conexões de banco ou variáveis de ambiente devem ficar em `config` ou `database`).

## Arquivos atuais

* **`pedidoHelper.js`**: Contém as funções para consultar o valor unitário dos produtos (`valorUnitario`) e calcular o desconto aplicado conforme a quantidade de itens (`calcularDesconto`).
