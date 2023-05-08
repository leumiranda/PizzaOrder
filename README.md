# Pizzaria em Node.js com TypeScript, Prisma e PostgreSQL
Bem-vindo(a) ao repositório do projeto da Pizzaria desenvolvido em Node.js utilizando TypeScript, Prisma, PostgreSQL, autenticação de login e senha com JSON Web Token (JWT), Express e middlewares. Este README fornecerá uma visão geral do projeto, instruções de instalação e informações sobre como executar e contribuir para o projeto.

## Visão Geral do Projeto
O projeto da Pizzaria é uma aplicação web que permite aos usuários realizar pedidos de pizzas online. Ele inclui recursos como:

Registro de usuários
Autenticação de login e senha
Geração e validação de tokens JWT para autenticação
Listagem de pizzas disponíveis
Adição de pizzas ao carrinho de compras
Processamento de pedidos
Integração com o banco de dados PostgreSQL através do Prisma
A aplicação é construída utilizando o framework Node.js e a linguagem TypeScript, que fornece maior segurança e escalabilidade ao código. O Prisma é utilizado como ORM (Object-Relational Mapping) para facilitar a comunicação com o banco de dados PostgreSQL. O Express é utilizado como framework web para lidar com as rotas e middlewares.

## Pré-requisitos
Certifique-se de ter as seguintes ferramentas instaladas em seu sistema:

- Node.js (versão 12 ou superior)
- Yarn ou npm (gerenciadores de pacotes)
- PostgreSQL (banco de dados)

## Instalação
Siga as instruções abaixo para configurar e executar o projeto em seu ambiente local:

### Clone este repositório para o seu computador:
 ` git clone https://github.com/seu-usuario/pizzaria-nodejs.git `
 
### Acesse o diretório do projeto:
`cd pizzaria-nodejs`

### Instale as dependências do projeto:
`yarn install ou npm install`

### Crie um arquivo .env na raiz do projeto e defina as seguintes variáveis de ambiente:

- PORT=3000
- DATABASE_URL=postgresql://usuario:senha@localhost:5432/nome-do-banco
- JWT_SECRET=seu-segredo-aqui

### Certifique-se de substituir usuario, senha e nome-do-banco pelas suas configurações locais do PostgreSQL. O valor para JWT_SECRET pode ser qualquer string de sua escolha.

### Execute as migrações do banco de dados:
- npx prisma migrate dev
### Inicie a aplicação:
- yarn dev ou npm run dev
### A aplicação estará disponível em http://localhost:3000.

Uso
Acesse a aplicação no seu navegador e explore as funcionalidades da Pizzaria. Você poderá realizar o registro de um novo usuário, fazer login, visualizar as pizzas disponíveis, adicionar pizzas ao carrinho de compras e processar pedidos.

Contribuição
Se você deseja contribuir para este projeto, sinta-se à vontade para abrir uma nova issue ou enviar um pull request. Será um prazer receber contribuições que possam melhorar o projeto.

Certifique-se de seguir as diretrizes de contribuição e de incluir uma descrição clara do problema que está sendo resolvido ou da funcionalidade que está sendo adicionada
