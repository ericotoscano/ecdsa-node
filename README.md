# ECDSA Node
![Static Badge](https://img.shields.io/badge/LICENSE-MIT-red)
![Static Badge](https://img.shields.io/badge/NPM_VERSION-9.7.2-green)
![Static Badge](https://img.shields.io/badge/STATUS-DEVELOPING-yellow)

## Índice

* [Descrição do Projeto](#descrição-do-projeto)
* [Tecnologias Utilizadas](#tecnologias-utilizadas)
* [Começando](#começando)
* [Estrutura dos Arquivos](#estrutura-dos-arquivos)
* [Instalação](#instalação)
* [Funcionalidades](#funcionalidades)
* [Implementações Futuras](#implementações-futuras)
* [Licença](#licença)
* [Contato](#contato)

## Descrição do Projeto
Esse projeto faz parte das atividades desenvolvidas no [Ethereum Developer Bootcamp](https://www.alchemy.com/university/courses/ethereum), disponibilizado pela [Alchemy University](https://www.alchemy.com/university). Seu desenvolvimento completa a primeira semana de estudos e tem por objetivo solidificar conhecimentos básicos sobre transferências de ativos entre endereços, utilizando **_criptografia de chave pública_** e **_assinaturas digitais por meio do algoritmo de curvas elípticas_**.

Uma vez que o foco da atividade é a utilização da criptografia na realização de transferências, a aplicação utiliza-se de um _servidor simples_ no **back-end**, em um _ambiente centralizado_. Entretanto, os conceitos criptográficos aplicados servem de base para compreensão do funcionamento de transações em **redes descentralizadas**, como o próprio [Ethereum](https://ethereum.org/pt-br/). 

## Tecnologias Utilizadas

* [![Next][Next.js]][Next-url]
* [![React][React.js]][React-url]
* [![Vue][Vue.js]][Vue-url]
* [![Angular][Angular.io]][Angular-url]
* [![Svelte][Svelte.dev]][Svelte-url]
* [![Laravel][Laravel.com]][Laravel-url]
* [![Bootstrap][Bootstrap.com]][Bootstrap-url]
* [![JQuery][JQuery.com]][JQuery-url]

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
  
<summary>assets</summary>
<br>

Contém a pasta [_img_](/assets/img), cujo conteúdo são as imagens utilizadas neste arquivo [README](/README.md).
<br>
</details>

<details>
<summary>client</summary>
<br>

Contém arquivos e pastas relacionados ao _front-end_ (componentes [React](https://reactjs.org/) e arquivos do [Vite](https://vitejs.dev/)). 

O arquivo [_server.js_](/client/src/server.js) cria uma nova instância do [Axios](https://axios-http.com/).
<br>
</details>

<details>
<summary>server</summary>
<br>

Contém arquivos e pastas relacionados ao _back-end_ (em destaque, o arquivo [_index.js_](/server/index.js) contém a API utilizada pelo _front-end_ do projeto).

A pasta [_scripts_](/server/scripts) contém o arquivo [_generateusers.js_](/server/scripts/generateusers.js), que pode ser utilizado para gerar, randomicamente, os endereços dos usuários, suas respectivas chaves públicas e privadas, além dos seus respectivos saldos iniciais (100 unidades).
<br>
</details>

<details>
<summary>LICENSE</summary>
<br>

Arquivo com o texto da licença _open source_ do projeto.
<br>
</details>

<details>
<summary>README.md</summary>
<br>

Arquivo [README](/README.md) do projeto.
<br>
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

## Licença

Distribuído sob a licença MIT (para maiores informações, acesse o arquivo [LICENSE](/LICENSE).

## Contato

<img align="left" src="/assets/img/me.png" width="73px" alt="Érico Toscano de Oliveira">

**Érico Toscano de Oliveira**

[![Gmail Badge](https://img.shields.io/badge/Gmail-D14836?style=for-the-badge&logo=gmail&logoColor=white)](mailto:deverico.toscano@gmail.com)
[![Linkedin Badge](https://img.shields.io/badge/LinkedIn-0077B5?style=for-the-badge&logo=linkedin&logoColor=white)](https://www.linkedin.com/in/érico-toscano-de-oliveira-0338b1208)
