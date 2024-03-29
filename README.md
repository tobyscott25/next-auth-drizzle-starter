# Next.js + Auth.js + PostgreSQL + Docker starter

## Introduction

This is a simple [Next.js](https://nextjs.org/) + [TypeScript](https://www.typescriptlang.org/) boilerplate app that uses [Auth.js](https://authjs.dev/) for authentication and session management.

When a user logs in, their data is upserted to the [PostgreSQL](https://www.postgresql.org/) database by Auth.js's [@auth/pg-adapter](https://authjs.dev/reference/adapter/pg) adapter.

This project uses [Docker Compose](https://www.docker.com/) for an easy dev setup, so you don't need to run a database natively.

## Getting Started

#### Setup OAuth provider(s)

This project uses GitHub as the example OAuth provider. You can use any other OAuth provider by changing the configuration in `auth.ts`.

Create a [GitHub OAuth application](https://docs.github.com/en/apps/oauth-apps/building-oauth-apps/creating-an-oauth-app) with the callback URL of `http://localhost:3000/api/auth/callback/github`.

#### Generate an Auth.js secret

Generate a random string for Auth.js to use to hash tokens, sign cookies and generate cryptographic keys.

```sh
openssl rand -hex 32
```

#### Configure the environment

Now set the OAuth app's Client ID + Secret ID and Auth.js secret in the `.env.local` file.

`.env.local` is ignored by Git, so you can safely store secrets in it. Duplicate values in `.env.local` will override those in `.env`.

```sh
cp .env .env.local
vim .env.local
```

#### Creating the required schema in the database

The SQL schema for the tables used by the AuthJS are available on Auth.js's [database models](https://authjs.dev/getting-started/adapters#models) documentation.

This project uses [@auth/pg-adapter](https://authjs.dev/reference/adapter/pg) so we can use the SQL available on that documentation page to setup the database. I have also saved this in `setup-schema.sql` in the root of the repo.

#### Run the development stack

```bash
docker compose up
```

Visit PGAdmin on http://localhost:5050 and run the contents of `setup.sql` to create the required database tables.

Now go to http://localhost:3000 and login with GitHub.
