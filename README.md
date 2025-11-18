# CADASTRO E LOGIN COM NODEJS
👨‍🏫FORMULARIO DE CADASTRO E LOGIN EM HTML, CSS, JS (NODEJS) E MYSQL.


## DESCRIÇÃO:
Este aplicativo é um sistema de login e cadastro desenvolvido em Node.js utilizando o framework Express.js para criar o servidor web e o banco de dados MySQL para armazenar informações dos usuários.

Ele consiste em duas partes principais:

1. **Servidor Node.js com Express.js:**
   - Configura um servidor HTTP usando o Express.js, um framework web para Node.js.
   - Define rotas para manipular requisições HTTP, incluindo rotas para lidar com o formulário de login e cadastro.
   - Usa o middleware `body-parser` para processar os dados enviados pelo formulário HTML.
   - Usa o middleware `express.static` para servir arquivos estáticos, como arquivos CSS e imagens.

2. **Banco de dados MySQL:**
   - Estabelece uma conexão com um banco de dados MySQL.
   - Possui uma tabela chamada "clientes" para armazenar informações dos usuários, incluindo e-mail e senha (com a senha sendo armazenada de forma segura, utilizando o algoritmo de hash bcrypt).

Funcionamento do aplicativo:
- Quando um usuário acessa o aplicativo através do navegador, ele é apresentado com um formulário HTML contendo campos para e-mail, senha e botões para login e cadastro.
- Quando o usuário preenche o formulário e envia, os dados são enviados para o servidor Node.js.
- No servidor, os dados são processados e verificados:
  - Se o usuário optar por se cadastrar, suas informações são inseridas no banco de dados.
  - Se o usuário optar por fazer login, suas informações são comparadas com as informações armazenadas no banco de dados. Se forem válidas, o login é bem-sucedido; caso contrário, uma mensagem de erro é retornada.
- O servidor responde ao navegador com uma mensagem de sucesso ou erro, que é exibida ao usuário.

## MINHA OPINIÃO:
Eu desenvolvi este projeto como uma adaptação de um projeto existente em [PHP](https://github.com/VILHALVA/CADASTRO-E-LOGIN-COM-PHP) para uma implementação em Node.js. A decisão de migrar para Node.js foi motivada por aprendizado de uma nova tecnologia.

Ao criar este aplicativo, eu procurei manter a simplicidade e a facilidade de compreensão. Isso é evidente na estrutura do código, onde optei por utilizar um framework minimalista como o Express.js, em vez de uma solução mais complexa. Além disso, me concentrei em funcionalidades essenciais, como autenticação de usuário e interação com um banco de dados, sem adicionar recursos desnecessários.

Essa simplicidade pode ser uma vantagem em muitos casos, especialmente para iniciantes que estão aprendendo a desenvolver aplicativos web ou para projetos que exigem uma implementação rápida e direta. Além disso, ao compartilhar a minha experiência, posso inspirar outros desenvolvedores a explorar alternativas e experimentar diferentes tecnologias em seus próprios projetos.

## EXECUTANDO O PROJETO:
1. **Configuração do Banco de Dados:**
   - Antes de executar o site, é necessário importar o arquivo `DATABASE.sql`. 

2. **Configuração do JS:**
   - Abra o arquivo `./CODIGO/CODIGO.js` e ajuste as configurações do seu banco de dados nos parâmetros de `sequelize`:

     ```javascript
     host: 'localhost',
     user: 'seu-usuario',
     password: 'sua-senha',
     database: 'registro'
     ```

3. **Instalando as Depêndencias:**
   - Para instalar as dependências listadas no arquivo "package.json", você pode usar o comando `npm install` ou simplesmente `npm i` no terminal. Certifique-se de estar no diretório do seu projeto onde o arquivo "package.json" está localizado. O npm irá ler o arquivo "package.json" e instalar todas as dependências listadas nele. 

   - Aqui está o comando:

   ```bash
   npm install
   ```

   ou

   ```bash
   npm i
   ```

4. **Executando o Aplicativo:**
   - Para subir o servidor, no diretório do seu [projeto](./CODIGO/COD, digite o seguinte comando no Terminal/CMD:
   ```bash
   node CODIGO.js
   ```
   - OU:
   ```bash
   nodemon CODIGO.js
   ```

   - Acesse o APP no navegador visitando `http://localhost:3000`.

## NÃO SABE?
- Entendemos que para manipular arquivos em `HTML`, `CSS` e outras linguagens relacionadas, é necessário possuir conhecimento nessas áreas. Para auxiliar nesse aprendizado, oferecemos cursos gratuitos disponíveis:
* [CURSO DE HTML E CSS](https://github.com/VILHALVA/CURSO-DE-HTML-E-CSS)
* [CURSO DE NODEJS](https://github.com/VILHALVA/CURSO-DE-NODEJS)
* [CURSO DE EXPRESSJS](https://github.com/VILHALVA/CURSO-DE-EXPRESSJS)
* [CURSO DE MYSQL](https://github.com/VILHALVA/CURSO-DE-MYSQL)
* [CURSO DE NODEJS COM MYSQL](https://github.com/VILHALVA/CURSO-DE-NODEJS-COM-MYSQL)
* [CONFIRA MAIS CURSOS](https://github.com/VILHALVA?tab=repositories&q=+topic:CURSO)

## CREDITOS:
- [PROJETO ADAPTADO DA VERSÃO EM PHP]



