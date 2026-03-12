# Nome do Projeto - Backend

<br />

<div align="center">
    <img src="https://i.imgur.com/icgjsRQ.png" title="source: imgur.com" width="50%"/>
</div>


<br /><br />

## 1. Descrição

Este projeto é uma plataforma de caronas/viagens compartilhadas que busca 
oferecer uma experiência mais fácil, intuitiva e segura para os usuários.

------

## 2. Sobre esta API


Esta API REST foi desenvolvida utilizando NestJS e TypeScript, com integração 
a um banco de dados MySQL.

Ela é responsável por gerenciar os dados da aplicação de caronas compartilhadas, 
permitindo a criação, consulta, atualização e remoção de informações através de 
endpoints HTTP.

A API segue a arquitetura modular proposta pelo NestJS, organizando o código em 
controllers, services e módulos para facilitar a manutenção e escalabilidade 
do projeto.
### 2.1. Principais Funcionalidades

1. Criar uma viagem, consultar e atualizar seus dados.
2. Cadastrar um Usuário, registrar um usuario em uma viagem e visualisar suas informações.
3. Cadastrar um Veículo, selecionar um veículo para a viagem e visualisar  os veículos disponíveis para condução.

------

## 3. Diagrama de Classes

Adicione a imagem do Diagrama de Classes (se houver)

<div align="center">
    <img src="mudar" title="source: imgur.com" width="50%"/>
</div>

------

## 4. Diagrama Entidade-Relacionamento (DER)

Adicione a imagem do DER

<div align="center">
    <img src="imagem" title="source: imgur.com" />
</div>



------

## 5. Tecnologias utilizadas

| Item                          | Descrição  |
| ----------------------------- | ---------- |
| **Servidor**                  | Node JS    |
| **Linguagem de programação**  | TypeScript |
| **Framework**                 | Nest JS    |
| **ORM**                       | TypeORM    |
| **Banco de dados Relacional** | MySQL      |

------

## 6. Configuração e Execução

1. Clone o repositório `[CorridaCompartilhada_backend](https://github.com/grupo6-js13/corridacompartilhada_backend)`
2. Instale as dependências: `npm install`
3. Configure o banco de dados no arquivo `app.module.ts`
4. Execute a aplicação: `npm run start:dev`