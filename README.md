# Next.js + Auth.js + Drizzle + Docker starter

## Introduction

This is a simple [Next.js](https://nextjs.org/) + [TypeScript](https://www.typescriptlang.org/) boilerplate app that uses [Auth.js](https://authjs.dev/) for authentication and session management. When a user logs in, their data is upserted to the [PostgreSQL](https://www.postgresql.org/) database with Auth.js's [@auth/drizzle-adapter](https://authjs.dev/reference/adapter/drizzle) adapter.

The SQL models required by the AuthJS are available on Auth.js's [database models](https://authjs.dev/getting-started/adapters#models) documentation. This project uses [@auth/drizzle-adapter](https://authjs.dev/reference/adapter/drizzle) so we can use their pre-defined Drizzle schema for PostgreSQL to generate the correct migrations with Drizzle.

This project uses [Docker Compose](https://www.docker.com/) for an easy dev setup, so you don't need to run a database natively. It will also automatically run the migrations for you when the Next.js server starts.

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

#### Run the development stack

This will automatically install the NPM dependencies and run the DB migrations

```bash
docker compose up
```

Now visit http://localhost:3000 and login with GitHub! 🎉
