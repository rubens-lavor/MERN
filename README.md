## MERN

MERN significa MongoDB, Express, React e Node, nome das quatro tecnologias principais que compõem a pilha.

- MongoDB: banco de dados não relacional, ideal para aplicações web, pois, faz query’s e retornos utilizando JSON.
- Express: framework utilizado no backend que facilita a criação de API’s REST, gerenciando rotas e requisições.
- React: framework utilizado no frontend, criado e utilizado pelo Facebook, o React torna a criação do front muito mais produtiva, pois, utiliza basicamente apenas Javascript.
- Node.js: ambiente de execução de códigos Javascript mais conhecido do mercado.


* [Sobre o projeto](#Sobre-o-projeto)
  * [Tecnologias](#Tecnologias)
  * [Ferramentas](#Ferramentas)


## Sobre o projeto

O projeto consiste num dashboard administrativo

## Tecnologias
Esse projeto foi desenvolvido com as seguintes tecnologias:
- [React](https://github.com/facebook/react)
- [Express](https://github.com/expressjs/express)
- [UIMaterial](https://github.com/mui-org/material-ui)
- [MongoDB](https://github.com/mongodb/mongo)
- [Node.js](https://github.com/nodejs)

## Ferramentas

- [Visual Studio Code](https://code.visualstudio.com)
- [Insomnia](https://insomnia.rest)
- [MongoDB Compass](https://www.mongodb.com)


### Pré-requisitos

Antes de começar, você vai precisar ter instalado em sua máquina as seguintes ferramentas:
[Git](https://git-scm.com), [Node.js](https://nodejs.org/en/) e o banco de dados não relacional [MongoDB](https://github.com/mongodb/mongo). 
Além disto é bom ter um editor para trabalhar com o código como [VSCode](https://code.visualstudio.com/)

### Rodando o Back End (servidor)

```bash
# Clone este repositório
$ git clone <https://github.com/rubens-lavor/MERN.git>

# Acesse a pasta do projeto no terminal/cmd
$ cd MERN

# Vá para a pasta backend
$ cd backend

# Instale as dependências
$ npm install


# Executea a aplicação backend 
$ npm run server

# O servidor inciará na porta:5000 - acesse <http://localhost:5000>
```


### Rodando o Front End (cliente)

```bash
# Retorne ao diretório raiz
$ cd ..

# Vá para a pasta client
$ cd client

# Instale as dependências
$ npm install

# Execute a aplicação frontend
$ npm run start