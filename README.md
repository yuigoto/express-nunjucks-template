# Express Nunjucks Template

> _Um boilerplate para aplicações web para Node.js, usando Express e Nunjucks._

----------------------------------------------------------------------

## Requisitos

- [**Node.js**](https://nodejs.org) @ `^8.X`
  - _Recomendável versão `10.x` ou maior_
- **Gulp CLI**: `npm install -g gulp-cli`

----------------------------------------------------------------------

## Dependências

Algumas dependências podem ser desnecessárias, dependendo da aplicação que está a construir. Remover e/ou adicionar dependências fica a seu critério.

A maioria das dependências fora inclusa para facilitar o meu trabalho com alguns projetos que estou a desenvolver. :wink:

##### Dependências

- _angular_ @ `^1.7.5`
- _angular-animate_ @ `^1.7.5`
- _angular-cookies_ @ `^1.7.5`
- _angular-filter_ @ `^0.5.17`
- _angular-recaptcha_ @ `^4.2.0`
- _angular-ui-bootstrap_ @ `^2.5.6`
- _bootstrap_ @ `^3.3.7`
- _dotenv_ @ `^6.1.0`
- _express_ @ `^4.16.4`
- _font-awesome_ @ `^4.7.0`
- _jquery_ @ `^3.3.1`
- _jquery-mask-plugin_ @ `^1.14.15`
- _memory-cache_ @ `^0.2.0`
- _multer_ @ `^1.4.1`
- _nunjucks_ @ `^3.1.3`
- _owl.carousel_ @ `^2.3.4`
- _request_ @ `^2.88.`

##### Dependências p/ Desenvolvimento

- _del_ @ `^3.0.0`
- _gulp_ @ `^4.0.0`
- _gulp-autoprefixer_ @ `^6.0.0`
- _gulp-clean-css_ @ `^3.10.0`
- _gulp-cli_ @ `^2.0.1`
- _gulp-concat_ @ `^2.6.1`
- _gulp-if_ @ `^2.0.2`
- _gulp-jshint_ @ `^2.1.0`
- _gulp-nodemon_ @ `^2.4.1`
- _gulp-rename_ @ `^1.4.0`
- _gulp-replace_ @ `^1.0.0`
- _gulp-sass_ @ `^4.0.2`
- _gulp-shell_ @ `^0.6.5`
- _gulp-sourcemaps_ @ `^2.6.4`
- _gulp-uglify_ @ `^3.0.1`
- _gulp-util_ @ `^3.0.8`
- _jshint_ @ `^2.9.6`
- _jshint-stylish_ @ `^2.2.1`
- _minimist_ @ `^1.2.0`
- _nodemon_ @ `^1.18.6`

----------------------------------------------------------------------

## Como Usar

- Clone o repositório
- Instale as dependências com um `npm install` na pasta do repositório
- Faça uma cópia do arquivo `.env.template` e renomeie para `.env` (ou apenas crie o arquivo diretamente), preencha com os seus dados e outros valores para disponibilizar durante a execução
  - _Pode ser necessário modificar o `.gitignore` e o script de build/deploy para que o seu arquivo `.env` seja enviado ao servidor de produção_
  - _Usuários de **Windows**: pode ser chato criar um arquivo assim no Explorer, por isso recomendo que o façam usando um editor de texto, como [**Notepad++**](https://notepad-plus-plus.org/) ou [**Visual Studio Code**](https://code.visualstudio.com/)_
- Monte as suas rotas conforme os exemplos fornecidos em `/routes`, veja mais detalhes na [documentação do Express](http://expressjs.com/en/4x/api.html)
- Coloque os seus templates em `/src/views`, assets em `/src/assets`, modifique o `gulpfile.js`, se necessário

### Tarefas do Gulp

Todas as tarefas seguem o padrão: `gulp [tarefa] --[argumento] [valor]`.

**Tarefas disponíveis**:
- `build` 
- `start` 

**Argumentos disponíveis**:
- `--env`
  - Aceita `dev`, `prod` ou `production` e `test`

----------------------------------------------------------------------

## Documentação

Coloque link ou documentação diretamente aqui.

----------------------------------------------------------------------

## Estrutura

Não é obrigatório, mas bom colocar em projetos muito extensos.

```
src
|---> assets
|---> data
|---> fonts
|---> img
|---> routes
|---> views
```

----------------------------------------------------------------------

## Autores

Veja `AUTHORS.md` para maiores informações.

----------------------------------------------------------------------

## Licença

Este projeto está licenciado sob a `Licença MIT`. Veja o arquivo `LICENSE.md` para maiores detalhes sobre a licença (em inglês).

----------------------------------------------------------------------

_©2018-2020 Fabio Y. Goto_
