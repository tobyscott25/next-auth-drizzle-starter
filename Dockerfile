FROM node:20.11.1-alpine3.19 AS builder

# Set the working directory
WORKDIR /docker-build

# Simple way to include package.json and all app code
COPY . .

RUN npm install
RUN npx next telemetry disable
RUN npm run build

# Runtime stage
FROM node:20.11.1-alpine3.19 AS runtime

WORKDIR /docker-run

# Copy built assets from the builder stage
COPY --from=builder /docker-build/public ./public
COPY --from=builder /docker-build/.next/standalone ./
COPY --from=builder /docker-build/.next/static ./.next/static
COPY --from=builder /docker-build/node_modules ./node_modules
# COPY --from=builder /docker-build/prisma ./prisma

# Simple way to include package.json and all migrations
COPY . .

WORKDIR /docker-run

# RUN npm install -g prisma@5 && npx prisma generate

EXPOSE 3000
RUN node /docker-run/server.js
# CMD ["./start-prod-app.sh"]