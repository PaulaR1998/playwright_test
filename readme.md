# Shopping Cart Automation Tests

Este projeto contém testes automatizados para a aplicação de e-commerce [Sauce Demo](https://www.saucedemo.com/) utilizando Playwright. Os testes garantem que funcionalidades críticas da aplicação, como login, adição de produtos ao carrinho e processo de checkout, funcionem corretamente.
## Descrição do Projeto
Este projeto é um conjunto de testes automatizados para verificar as principais funcionalidades da aplicação de e-commerce Sauce Demo. Os testes incluem:
1. Teste:Login com sucesso
verifica se foi pra url de inventário
2. Teste: Login Invalido
-verifica mensagem de erro 
3. Teste: verifica todos os produtos que começam com "Souce"'
Retorna os que tem e o que não tem Souce
4. Teste: Pagina de produtos
Verifica se os produtos estão em ordem alfabética
5. Teste: para ordenar por nome de A a Z
6. Teste: para ordenar por nome de Z a A
7. Teste: Ordenar por preço do mais baixo ao mais alto
8. Teste: Ordenar por preço do mais alto ao mais baixo
9. Teste: Adicionar o produto 'Sauce Labs Backpack' ao carrinho
10. Teste: Clicar no carrinho 
verificar o produto adicionado está correto
11. Teste: Finalizar pro checkout  e verifica se a url está correta
12. Teste: Valida informação do checkout como nome ,segundo nome e Cep/code
13.  Teste: feve exibir mensagem de erro 
Quando o código postal estiver nulo.

## Pré-requisitos
Antes de executar o projeto, certifique-se de que você possui as seguintes ferramentas instaladas:
- [TYPESCRIPT] : Extensão VSCode JavaScript and TypeScript Nightly
- [Node.js](https://nodejs.org/) (node-v20.17.0-x64)
- [Playwright](https://playwright.dev/) Playwright Test for VSCode
- [GIT] 2.46.2 setup
- [GITBASH] (2.46.2) 64-bit version of Git for Windows
  
## Instalação
1. Clone o repositório:
   ```bash
   git clone https://github.com/PaulaR1998/playwright_test
   cd playwright_test
