# NextJS + Chakra UI + AuthJS + Drizzle + PostgreSQL + Docker starter

The stack:

- [TypeScript](https://www.typescriptlang.org/)
- [Next.js](https://nextjs.org/)
- [Chakra UI](https://chakra-ui.com/)
- [Auth.js](https://authjs.dev/)
- [Drizzle](https://orm.drizzle.team/)
- [PostgreSQL](https://www.postgresql.org/)
- [Docker](https://www.docker.com/)

## Getting Started

Set environment variables:

```sh
# Secrets go in .env.local, it's ignored by Git.
# Duplicate values in .env.local will override those in .env.
cp .env .env.local
vim .env.local
```

Run the development server:

```bash
npm run dev
```

Open [http://localhost:3000](http://localhost:3000) with your browser to see the result.
