# Descrição da aplicação

Para iniciar a aplicação basta usar o comando:
```
npm install
```

Dessa forma todas as dependências serão instaladas.

## Logando o Database:

No arquivo "db.config.js" localizado na pasta <strong>models</strong> no campo PASSWORD, é necessário digitar a senha do banco de dados mysql cadastrado no diretório local.

```javacript
PASSWORD: "", <- digite sua senha
```

Após a sincronia com o banco de dados do MySQL no arquivo <strong>Contact.js</strong> é indicado <u>comentar</u> o trecho de código da linha 25:

```javascript
//Contact.sync();
```

Esse trecho de código cria a sincronização da tabela com o database, caso não seja comentado a cada nova atualização ele irá informar que uma nova tentativa de criar a tabela "agendas" foi gerada.

---
## Iniciando o servidor

A aplicação roda na porta 5000 do localhost:

```
http://localhost:5000
```

Use o comando:

```
node app.js
```
ou
```
nodemon app.js
```

- O nodemon é uma dependencia instalada para que o funcionamento de alterações na aplicação possa funcionar sem a necessidade de uma nova inicialização pelo terminal.
---

## Stacks usadas
- JavaScript
- NodeJS
- Express
- Handlebars
- CSS 3
- MySQL
- Sequelize