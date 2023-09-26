# ECDSA Node

Esse projeto faz parte das atividades desenvolvidas no [Ethereum Developer Bootcamp](https://www.alchemy.com/university/courses/ethereum), disponibilizado pela [Alchemy University](https://www.alchemy.com/university). Seu desenvolvimento completa a primeira semana de estudos e tem por objetivo solidificar conhecimentos básicos sobre transferências de ativos entre endereços, utilizando **_criptografia de chave pública_** e **_assinaturas digitais por meio de curvas elípticas_**. 

Uma vez que o foco da atividade é a utilização da criptografia na realização de transferências, a aplicação utiliza-se de um _servidor simples_ no **back-end**, em um _ambiente centralizado_. Entretanto, os conceitos criptográficos aplicados servem de base para compreensão do funcionamento de transações em **redes descentralizadas**, como o próprio [Ethereum](https://ethereum.org/pt-br/). 

## Começando

Para obter uma cópia do projeto em sua máquina, faça a _clonagem_ deste repositório através do **terminal**, utilizando o comando:

`git clone https://github.com/ericotoscano/ecdsa-node.git`

## Estrutura dos Arquivos

Após a _clonagem_ deste repositório, a estrutura dos arquivos será a seguinte:

![Estrutura dos arquivos do repositório clonado](/assets/img/folders.jpg)

Uma breve descrição dos conteúdos é feita nas seções a seguir:

<details>
  
<summary>.vscode</summary>
<br>

Contém o arquivo [_launch.json_](/.vscode/launch.json), utilizado pelo [VsCode](https://code.visualstudio.com/) para configurar e personalizar o _depurador_.
<br>
</details>

<details>
<summary>client</summary>

</details>

<details>
<summary>server</summary>

</details>

<details>
<summary>LICENSE</summary>

</details>

<details>
<summary>README.md</summary>

</details>

## Instalação

### Servidor

A pasta _server_ contém um servidor [Node.js](https://nodejs.org/pt-br), usando o [Express](https://expressjs.com/). Para iniciar o servidor, siga os passos a seguir:

1. Abra o terminal na pasta `/server` 
2. Execute o comando `npm install` para instalar todas as dependências 
3. Execute o comando `node index` ou `nodemon index` para iniciar o servidor 

_A aplicação deve conectar-se automaticamente à porta padrão do servidor (3042)._ 

### Cliente

A pasta _client_ contém uma aplicação [React](https://reactjs.org/), usando o [Vite](https://vitejs.dev/). Para iniciar a aplicação, siga os passos a seguir:

1. Abra o terminal na pasta `/client`
2. Execute o comando `npm install` para instalar todas as dependências
3. Execute o comando `npm run dev` para iniciar a aplicação
4. Se não houver erros, a aplicação estará disponível em http://127.0.0.1:5173/

## Funcionalidades

## Implementações Futuras

- Melhoramentos em UX/UI;
- Adição de Testes automatizados;

## Autores

<!-- ### Video instructions
For an overview of this project as well as getting started instructions, check out the following video:

https://www.loom.com/share/0d3c74890b8e44a5918c4cacb3f646c4
-->
