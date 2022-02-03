# Projeto Agenda utilizando Nodejs, Express e sockets.

- Esse projeto foi desenvolvido com propósitos educacionais apenas, para a disciplina de Sistemas Distribuídos 2021/2 do curso de Engenharia de Computação do Instituto Federal do Sul de Minas Gerais.

## 🚀 Como funciona

- O projeto consiste basicamente em um crud de tarefas e ao criar uma tarefa será emetido uma mensagem via udt e tcp.

### 📋 Pré-requisitos

- NodeJs 16.13.2;
- Alguma IDE de desenvolvimento, recomendado o Visual Code

### 🔧 Instalação

- Clonar o repositório na máquina;
- Executar o comando 'npm install --global yarn' para instalar o Yarn;
- Executar o comando 'yarn' para baixar as dependências;
- Executar o comando 'yarn dev' para iniciar o servidor;
- Para executar o cliente que receberá a mensagem via UDP basta digitar o comando 'node clientUdp.js';
- Para executar o cliente que receberá a mensagem via TCP basta digitar o comando 'node clientTcp.js';

## 🛠️ Construído com

* [TypeScript] - Linguagem de programação usada;
* [Yarn] - Gerenciador de dependências;
* [Express] - Framework para criação de APIs em node;

## ✒️ Autores

* **Antonio Amaral** - *Desenvolvimento, Arquitetura e Documentação* - [oamaraldev](https://github.com/oamaraldev)
* **Mateus Nazaré** - *Desenvolvimento* - [MateusNazare](https://github.com/MateusNazare)
