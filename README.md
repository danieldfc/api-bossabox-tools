# :wrench: Bossabox - Vuttr

<br />

<p align="center" style="font-weight: bold; font-size: 24px">
Este repositório tem o objetivo de criar uma API Rest como desafio da <span style="color: #365df0;">Bossabox</span>! 🚀
</p>

<hr />

## :rocket: Visão geral

A API Rest foi criada no intuito de facilitar a a criação e busca de ferramentas com suas determinadas tags relacionadas.

<hr />

## :scroll: Tabela de conteúdo

- [:rocket: Visão geral](#rocket-visão-geral)
- [:scroll: Tabela de conteúdo](#scroll-tabela-de-conteúdo)
- [:wrench: Ferramentas](#wrench-ferramentas)
- [:construction: API](#construction-api)
- [:star2: Contribuição](#star2-contribuição)
- [:clipboard: Licença](#clipboard-licença)

<hr />

## :wrench: Ferramentas

A ferramenta usada neste desafio foi o `Node.js`. A Bossabox, deixou livre a escolha, então como estou mais adepto a utilização deste aparato, logo foi mais compreensível e sensata o aproveitamento de conhecimento diante do desafio proposto.

Também é necessário dizer, que foi construido este projeto, utilizando `typescript`, lidando com `DDD` (Domain Driven Design), logo a responsabilidade, foi bem construida para que cada funcionalidade seja desaclopada ao uso de ferramentas terceiras.

Com a utilização do typescript, para facilitar a construção do banco de dados, foi aplicado o `TypeORM`, pois este ORM lida muito bem com as informações manipuladas com `Typescript`.

<hr />

> Antes de sair codando é preciso, instalar as dependências. Como este projeto é um monorepo, você só precisa instalar somente uma vez, com o comando `yarn`.

Caso não tenha o `yarn`, você pode instala-lo, por meio [deste link](https://classic.yarnpkg.com/en/docs/install).

<hr />

## :construction: API

Para executar a aplicação, depois de ter instalado as dependências, é preciso criar o seu banco de dados, neste desafio, foi utilizado o `postgres`, se caso, queira usar outro banco de dados, será necessário, que não inclua o arquivo `ormconfig.json`, no seu commit, isso para facilitar o uso de outros contribuidores.

Ao criar o seu database, você poderá criar o arquivo `ormconfig.json`, na raíz do projeto, copiando o conteúdo do arquivo `ormconfig.example.json`.

Logo depois, refatore, as propriedades de : `host`, `port`, `username`, `password` e `database`, expecífico para o seu sistema. Tendo isso feito, você pode fazer a migração de suas tabelas, com o seguinte comando:

```sh
$ yarn typeorm migration:run
```

Caso queira criar uma nova migration, basta executar:

```sh
$ yarn typeorm migration:create -n name_migration
```

Em seguida você poderá executar a aplicação em ambiente de desenvolvimento com:

```sh
$ yarn dev
```

<hr />

## :star2: Contribuição

Sei que suas ideias valeram muito a pena, então, quando você quiser fazer uma contribuição, faça este passo a passo, para que você consiga contribuir com este projeto:

Na raiz do projeto você vai encontrar o arquivo `package.json` e nele, você irá colocar as seguintes configurações em: `contributors`; depois dos seus colegas de equipe: nome, url e email(opcional).

*Ex.:*
```json
"contributors": [
  {
    "name": "seu nome",
    "email": "seu email",
    "url": "https://github.com/seu_usuario"
  }
]
```

É importante que você não mexa nos nomes de seus colegas, caso isso aconteça, **não será aceito a pull request**.

Contribuições são o que fazem a comunidade open source um lugar incrível para aprender, inspirar e criar. Qualquer contribuição que você fizer, será **muito apreciada**.

1. Faça um Fork do projeto
2. Crie uma Branch para sua Feature (`git checkout -b feature/FeatureIncrivel`)
3. Adicione suas mudanças (`git add .`)
4. Comite suas mudanças (`git commit -m "Minha feature incrível"`)
5. Faça o Push da Branch (`git push origin feature/FeatureIncrivel`)
6. Abra uma Pull Request

[Para mais, veja também nossa wiki clicando neste link!](https://github.com/danieldfc/api-bossabox-tools/wiki)

<hr />

# :clipboard: Licença

MIT

> Created by Daniel Felizardo :purple_heart::rocket:
