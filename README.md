# Dockerized Nx application with NestJS and Angular which are connected via Graphql and NGRX

The repo provides:

- a preconfigured [Nx](https://nx.dev) application
- which uses [NestJS](https://nestjs.com) and [Angular](https://angular.io)
- has configured unit and e2e tests
- and is ready for [CircleCI](https://circleci.com) CI/CD integration

## Docker

To run the application, please ensure that you have [docker](https://www.docker.com) and [docker-compose](https://docs.docker.com/compose/) installed locally.

1. Then simply execute

   ```shell
   docker-compose up --build
   ```

1. Wait a bit until [backend](./apps/ct-backend) and [frontend](./apps/ct-frontend) have been successfully compiled

1. Open [http://localhost](http://localhost) in a browser

1. Profit

## Nx

[Nx](https://nx.dev) is backed with:

- [Shared entity models](./libs/ct-models/src) to have consistency on [frontend](./apps/ct-frontend) and [backend](./apps/ct-backend)

* [RenovateBot](https://www.whitesourcesoftware.com/free-developer-tools/renovate) to update dependencies
* [ESLint](https://eslint.org) to lint [frontend](./apps/ct-frontend) and [backend](./apps/ct-backend)
* [Prettier](https://prettier.io) to format files on save
* [Husky](https://typicode.github.io/husky) to format files on commit

## NestJS

[NestJS](https://nestjs.com) is backed with:

- [express](https://expressjs.com) and [helmet](https://helmetjs.github.io) to handle requests
- [TypeORM](https://typeorm.io) and [MySQL](https://www.mysql.com) to manage entities
- [GraphQL](https://www.graphql.com) and [code first](https://docs.nestjs.com/graphql/quick-start#code-first) approach
- Unit tests via [Jest](https://jestjs.io) with [CircleCI](https://circleci.com)

## Angular

[Angular](https://angular.io) is backed with:

- [NGRX](https://ngrx.io) to store and select entities
- [Apollo Angular](https://apollo-angular.com) to support [GraphQL](https://www.graphql.com)
- [ngrx-entity-relationship](https://ngrx-entity-relationship.sudo.eu) to manage entities with their relationships
- Unit tests via [jasmine](https://jasmine.github.io) and [Karma](https://karma-runner.github.io) with [CircleCI](https://circleci.com) and [Puppeteer](https://pptr.dev)
- E2E tests via [Protractor](https://www.protractortest.org/) with [CircleCI](https://circleci.com) and [Puppeteer](https://pptr.dev)
- [ng-mocks](https://ng-mocks.sudo.eu) to mock dependencies in tests

## SSO

[Keycloak](https://https://www.keycloak.org) is backed with:

- An app user with a username `user` and a password `user`
- A master user with a username `admin` and a password `admin` on [http://localhost/auth/admin](http://localhost/auth/admin)

## Email Catcher

[smtp4dev](https://github.com/rnwood/smtp4dev#readme) which can be accessed on [http://localhost/tools/emails/](http://localhost/tools/emails/)

## CircleCi

[CircleCI](https://circleci.com) is backed with:

- Checking lint on [frontend](./apps/ct-frontend)
- Executing unit tests on [frontend](./apps/ct-frontend) and collecting reports via `junit.xml` and `lcov.info`
- Executing [E2E tests](./apps/ct-frontend-e2e) on [frontend](./apps/ct-frontend) and collecting reports via `junit.xml`
- Building [frontend](./apps/ct-frontend)

* Checking lint on [backend](./apps/ct-backend)
* Executing unit tests on [backend](./apps/ct-backend) and collecting reports via `junit.xml` and `lcov.info`
* Building [backend](./apps/ct-backend)
