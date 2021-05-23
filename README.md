# Ypêdia Website Version 0.1.0

> Principais tecnologias utilizadas:

- Next.js
- Styled Components
- Eslint
- Prettier
- Lint-staged


> Frameworks

  O Framework escolhido para o projeto é o `Nextjs`. 

  Link: https://nextjs.org/docs/getting-started

  O projeto também utiliza outros frameworks para manter o padrão do código e vernsionamento.

  - Git Flow


> Padronização do versionamento do código

  Para mantermos a padrão dos commits é utilizada a
  biblioteca do `git-commit-msg-linter` para a padronização dos commits
  no formato do conventional commit.

  Link: https://www.conventionalcommits.org/en/v1.0.0/

```
  Formato correto: <tipo>(<escopo>): <assunto>
  Exemplo: docs: update README add developer tips

  tipo:

    feat     Uma nova feature
    fix      Uma correção de algum bug
    docs     Alterações na documentação do projeto
    style    Uma mudança que afete somente os estilos das páginas
    refactor Uma mudança de código que não corrige um bug nem adiciona um recurso
    test     Adicionar testes ou correção dos mesmos
    chore    Uma mudanças no processo de build ou ferramentas e bibliotecas auxiliares
    perf     Qualquer mudança para melhora de performance
    ci       Changes to your CI configuration files and scripts
    build    Mudanças que afetam o build do systema ou dependências externas
    temp     Commit temporários que vocês irá incluir no seu CHANGELOG

  escopo:
    Opcional, você pode especificar qualquer coisa sobre o escopo do commit.

  assunto:
    Breve resumo das mudanças realizadas
```

Obs: Para garantir a integridade do projeto código o `Husky` irá fazer uma verificação
de lint no código, `caso o mesmo não passe nos testes não será feito o commit`.

> Git Flow

  Branch Types:

      feature/
      bugfix/
      release/
      hotfix/
      support/

  - Iniciando algum trabalho
  git flow start [branch_type] [branch_name]

  - Criando um Commit
  git add. && git commit -m [commit_message] 

  Esse comando fará o Stage em todas as alterações e irá executar a pipeline de testes. 
  O commit só será realizado após todos os testes.
  Para pular a verificação basta adicionar o comando `--no-verify`

  - git flow finish [branch_type] [branch_name]

  - git push origin
  

> Padronização do código

  Para a padronização e manutenção do códido são utilizadas duas bibliotecas
  em conjunto o eslint (definição de regras de desenvolvimento) e o 
  prettier (definições de organização de codigo).

  Prettier: https://prettier.io/docs/en/index.html 

  Eslint: https://eslint.org/


> Estados Globais

  Para o gerenciamento dos estados globais é utilizado a biblioteca 
  nativa do react o Context Api.

  Link: https://pt-br.reactjs.org/docs/context.html


> Instalar dependênias do projeto

```
npm i
```


> Ambiente de desenvolvimento

```
npm run dev
```


> Ambiente de produção

```
npm run start
```


> Teste de build em ambiente de desenvolvimento

```
npm run build:dev && npm run start
```
Obs: Este comando irá gerar os arquivos estáticos em uma pasta `out` utilizando as 
variaves de ambiente de desenvilvomento.


> Teste de build em ambiente de homologação

```
npm run build:hml && npm run start
```
Obs: Este comando irá gerar os arquivos estáticos em uma pasta `out` utilizando as 
variaves de ambiente de homologação.

> Teste de build em ambiente de de produção

```
npm run build:production && npm run start
```

Obs: Este comando irá gerar os arquivos estaticos em uma pasta `out` utilizando as 
variaves de ambiente de produção.


> Deploy em ambiente desenvolvimento

O deploy do projeto é feito na `aws`, para nos certicarmos que o build na aws não irá 
falhar é recomendado que se faça a epata de `Teste de build em ambiente de desenvolvimento`
antes de realizarmos o deploy efetivamente, Após o teste atualize o branch de `development`
e exucute o comando abaixo:

```
git push aws development:develop
```

> Deploy em ambiente produção

O deploy do projeto é feito na `aws`, para nos certicarmos que o build na aws não irá 
falhar é recomendado que se faça a epata de `Teste de build em ambiente de produção`
antes de realizarmos o deploy efetivamente, Após o teste atualize o branch de `master`
e exucute o comando abaixo:

```
git push aws master:master
```
## Deploy on Vercel

The easiest way to deploy your Next.js app is to use the [Vercel Platform](https://vercel.com/import?utm_medium=default-template&filter=next.js&utm_source=create-next-app&utm_campaign=create-next-app-readme) from the creators of Next.js.

Check out our [Next.js deployment documentation](https://nextjs.org/docs/deployment) for more details.
