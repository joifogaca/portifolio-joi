# PortifolioJoi

This project was generated with [Angular CLI](https://github.com/angular/angular-cli) version 15.2.11.


## Deploy da aplicação (Vercel)

Aplicação rodando em produção:

[https://portifolio-joi.vercel.app/about](https://portifolio-joi.vercel.app/about)


## O que foi desenvolvido

Um portifolio em Angular usando HTML e CSS, consumindo uma api com teste unitários usando Jasmine.

Links da api:

https://6657bb375c3617052645b929.mockapi.io/api/portifolio/featured-projects

https://6657bb375c3617052645b929.mockapi.io/api/portifolio/simple-projects


## Como rodar o projeto

Rode `ng serve` para rodar em ambiente de desenvolvimento. Acesse a URL http://localhost:4200/.

#### Com docker e Nginx

Na raiz do projeto, realizar o build:

`docker build -t angular-portifolio-joi . `

Rodar a aplicação:

`docker run -p 4200:4200 angular-angular-portifolio-joi `


## Próximos passos

[] Adiconar tratamento de erros nas requisições
[] Tornar o layout responsivo
[] Criação de teste unitário
[] Adicionar cache
