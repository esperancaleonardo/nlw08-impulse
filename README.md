
# NLW08 - Impulse

Repositório com os códigos desenvolvidos durante a [NextLevelWeek 08 - Return](https://nextlevelweek.com/), 
realizada pela [Rocketseat](https://www.rocketseat.com.br/), seguindo a trilha **Impulse** onde foi desenvolvido uma
SPA (single page application) completa com versões **web**, **mobile**, e uma **API**
consumida por ambas.



## A Aplicação

Foi proposto e construído um **Widget** coletor de **feedbacks** onde os usuários 
podem enviar três tipos de feedbacks diferentes: um *bug*, uma *ideia*, ou *outra
coisa qualquer*. O resultado pode ser visualizado mais abaixo abaixo.

Para fixação também foi construído outro **Widget** mais simples, com botões
clicáveis que redirecionam para algumas redes e aplicativos.
## Stack utilizada

**Front-end:** React(react-ts), TypeScript, Vite (vite-js), TailwindCSS

**Back-end:** Node, Express, Prisma, Jest, SQLite

**Modile:** React-Native, TypeScript, Expo



## Screenshots

![App Screenshot](https://snipboard.io/7NTKkh.jpg)
![App Screenshot](https://snipboard.io/49YPrU.jpg)
![App Screenshot](https://snipboard.io/zNcTm1.jpg)



## Funcionalidades

- Temas dark e light (a ser implementado)
- Full Stack Development
- Multiplataforma
- Responsividade
- Acessibilidade para navegação por teclas


## Aprendizados

Conceitos de desenvolvimento front-end com ReactJs, conceitos desenvolvimento 
mobile com React-Native, 

Conceitos de desenvolvimento back-end com node, prisma.

Conceitos e funcionamento de migrations, versionamento de bancos de dados, deploy 
CI/CD utilizando ferramentas gratuitas (vercel e railway), acessibilidade durante
programação, frameworks CSS, responsividade, single page applications.


## Rodando localmente

Clone o projeto

```bash
  git clone https://github.com/esperancaleonardo/nlw08-impulse
```

Entre no diretório do projeto frontend

```bash
  cd nlw08-impulse/web
```

Instale as dependências

```bash
  npm install
```

Inicie o frontend

```bash
  npm run dev
```

Entre no diretório do projeto frontend

```bash
  cd nlw08-impulse/server
```

Instale as dependências

```bash
  npm install
```

Inicie o backend

```bash
  npm run dev
```

Inicie o Prisma para acessar o banco

```bash
  npx prisma studio
```

## Demonstração

Veja o deploy no [Vercel](https://nlw08-impulse.vercel.app/).
