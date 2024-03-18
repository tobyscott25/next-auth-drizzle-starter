# NextJS + AuthJS + PostgreSQL + Docker starter

The stack:

- [TypeScript](https://www.typescriptlang.org/)
- [Next.js](https://nextjs.org/)
- [Auth.js](https://authjs.dev/)
- [PostgreSQL](https://www.postgresql.org/)
- [Docker](https://www.docker.com/)

## Getting Started

Create an OAuth application on GitHub. The callback URL should be `http://localhost:3000/api/auth/callback/github`.

Set environment variables:

```sh
# Secrets go in .env.local, it's ignored by Git.
# Duplicate values in .env.local will override those in .env.
cp .env .env.local
vim .env.local
```

Run the development stack:

```bash
docker compose up
```

Visit PGAdmin on http://localhost:5050 and run the contents of `setup.sql` to create the required database tables.

Now go to http://localhost:3000 and login with GitHub.
