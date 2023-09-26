# ECDSA Node

Esse projeto faz parte das atividades desenvolvidas no [Ethereum Developer Bootcamp](https://www.alchemy.com/university/courses/ethereum), disponibilizado pela [Alchemy University](https://www.alchemy.com/university). Seu desenvolvimento completa a primeira semana de estudos e tem por objetivo solidificar conhecimentos básicos sobre transferências de ativos entre endereços, utilizando **_criptografia de chave pública_** e **_assinaturas digitais por meio de curvas elípticas_**. 

Uma vez que o foco da atividade é a utilização da criptografia na realização de transferências, a aplicação utiliza-se de um _servidor simples_ no **back-end**, em um _ambiente centralizado_. Entretanto, os conceitos criptográficos aplicados servem de base para compreensão do funcionamento de transações em **redes descentralizadas**, como o próprio [Ethereum](https://ethereum.org/pt-br/). 

## Começando

Para obter uma cópia do projeto em sua máquina local, faça a clonagem deste repositório através de um terminal na sua máquina, utilizando o comando:

`git clone https://github.com/ericotoscano/ecdsa-node.git`

## Instalação

### Cliente

A pasta "client" contém uma aplicação [React](https://reactjs.org/), usando o [Vite](https://vitejs.dev/). To get started, follow these steps:

1. Open up a terminal in the `/client` folder
2. Run `npm install` to install all the depedencies
3. Run `npm run dev` to start the application 
4. Now you should be able to visit the app at http://127.0.0.1:5173/

### Server

The server folder contains a node.js server using [express](https://expressjs.com/). To run the server, follow these steps:

1. Open a terminal within the `/server` folder 
2. Run `npm install` to install all the depedencies 
3. Run `node index` to start the server 

The application should connect to the default server port (3042) automatically! 

_Hint_ - Use [nodemon](https://www.npmjs.com/package/nodemon) instead of `node` to automatically restart the server on any changes.
### Video instructions
For an overview of this project as well as getting started instructions, check out the following video:

https://www.loom.com/share/0d3c74890b8e44a5918c4cacb3f646c4
