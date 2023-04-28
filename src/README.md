# Cifra de César

## Índice

- [1. Prefácio](#1-prefácio)
- [2. Usuários e utilização](#2-usuários-e-utilização)
- [3. Sobre o projeto e Critérios de Aceitação Mínimos do Projeto](#3-sobre-o-projeto-e-critérios-de-aceitação-mínimos-do-projeto)

---

## 1. Prefácio

Cifrar significa codificar. A [cifra de César](https://pt.wikipedia.org/wiki/Cifra_de_C%C3%A9sar)
é um dos primeiros tipos de criptografias conhecidas na história.
O imperador romano Júlio César utilizava essa cifra para enviar
ordens secretas aos seus generais no campo de batalha.

A cifra de César é uma das técnicas mais simples de cifrar uma mensagem. É um
tipo de cifra por substituição, em que cada letra do texto original é
substituida por outra que se encontra há um número fixo de posições
(deslocamento) mais a frente do mesmo alfabeto.

## 2. Usuários e utilização

São para qualquer pessoa que queira transmitir uma mensagem, mas que caso seja interceptada, não seja possível lê-la instantaneamente, de preferência só seja possível com a pessoa do qual o Remetente tenha enviado, ou seja, o destinatário da mensagem, que ao recebê-la saberá onde deve descriptografá-la, tornando a mensagem segura. Por ser uma interface de fácil entendimento, é possível a toda e qualquer pessoa que saiba utilizar a internet e consiga acessar o site.

## 3. Sobre o projeto e Critérios de Aceitação Mínimos do Projeto

Foi o primeiro projeto criado para o bootcamp da Laboratoria, da turma SAP-010.
A base do projeto é utilizar a Cifra de César, o Cipher.
As ferramentas utilizadas foram HTML, CSS e JavaScript, sendo os dois últimos as linguagens.
O protótipo do projeto era:

![](path/to/imagens/PROTOTIPOCIPHER.png)

A ideia era criar um visual no estilo Romano, bem antigo, como se fazia na época de Cesar, porque é da onde vem a criptografia.
Fases do projeto:
1)Iniciar com a estruturação básica do projeto, na base HTML.
2)Posteriormente foi definir as variáveis que seriam utilizadas.
3)Depois as funções.
4)E por último o layout da página.

Os critérios a serem cumpridos eram:
Uma interface que deve permitir ao usuário:

- **Criptografar uma mensagem**

  - Inserir a mensagem (texto) que deseja criptografar. A mensagem usa um
    alfabeto simplificado (apenas letras maiúsculas).
  - Escolher um número de deslocamento (_offset_) indicando quantas posições
    você deseja que a cifra desloque cada caractere do alfabeto. O número
    será positivo e inteiro (inteiro positivo).
  - Veja o resultado da mensagem criptografada.

- **Descriptografar uma mensagem**
  - Inserir a mensagem (texto) que deseja descriptografar. A mensagem usa um
    alfabeto simplificado (apenas letras maiúsculas).
  - Escolher um número de deslocamento (_offset_, que corresponde ao que usamos
    para criptografar) indicando quantas posições você deseja que a cifra
    desloque cada caractere do alfabeto. O número será positivo e inteiro
    (inteiro positivo).
  - Veja o resultado da mensagem descriptografada.

Os critérios adicionais eram de que pudesse ser utilizado acentuações e letras minúsculas.

Todos os critérios foram atendidos.

Em resumo, os critérios mínimos de aceitação do projeto para considerar o
Project Feedback:

- [ ] Possui uma interface que permite ao usuário criptografar e
      descriptografar.
- [ ] O projeto será entregue incluindo testes unitários dos métodos `cipher`
      (`encode` e `decode`).
- [ ] O projeto será entregue livre de _erros_ de `eslint` (_warnings_ são ok).
- [ ] O código do seu projeto será entregue no GitHub.
- [ ] A interface será "implantada" usando o GitHub Pages.
- [ ] O README contém uma definição de produto.
