## Description

Created with [Nest](https://github.com/nestjs/nest)

## Running Project

- copy `.env.sample` to `.env`
- start with `docker-compose up -d`

```bash
$ docker-compose up --build
```

It will take care of installation, generating Prisma client, syncing DB automatically.

There is no seeding, the DB is included in the project in `/prisma` directory

## Test

```bash
yarn test
```

## Features

- Used GraphQL with Dataloader (Mercurius with Fastify)
- Used Prisma ORM with SQLite DB
- Weather module with Weatherbit adapter
- Caching for weather using Redis with TTL of 2 hours.
- Unit/Integration testing
- ESLint (remove unused imports, improts sort)
- Commit hook setup using Husky to run test and format code
- ENV validation implementation using JOI
