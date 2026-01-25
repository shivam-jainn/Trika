# Stage 1: Build
FROM node:20 AS build

# Set the working directory
WORKDIR /app

# Install pnpm
RUN npm install -g pnpm

# Install dependencies with pnpm
COPY package.json pnpm-lock.yaml ./
RUN pnpm install

# Copy Prisma schema and source files
COPY prisma ./prisma
COPY . .

# Ensure the Prisma schema is available and generate Prisma Client
RUN pnpx prisma generate

# Compile TypeScript to JavaScript
RUN pnpm run build

# Stage 2: Production
FROM node:20 AS production

# Set the working directory
WORKDIR /app

# Install PM2 and PNPM, and curl for healthcheck
RUN npm install -g pm2 pnpm && apt-get update && apt-get install -y curl --no-install-recommends && rm -rf /var/lib/apt/lists/*

# Copy the compiled code and environment files
COPY --from=build /app/dist ./dist
COPY --from=build /app/package.json /app/pnpm-lock.yaml ./
COPY --from=build /app/node_modules ./node_modules

# Copy Prisma schema
COPY --from=build /app/prisma ./prisma

# Install production dependencies with pnpm
RUN pnpm install --prod

# Ensure Prisma Client is available
RUN pnpx prisma generate

# Create non-root user and drop privileges
RUN addgroup --system app && adduser --system --ingroup app app
USER app

# Pass NODE_ENV as an environment variable
ARG NODE_ENV=dev
ENV NODE_ENV=${NODE_ENV}

# Start the application using PM2
CMD ["pm2-runtime", "dist/server.js"]

# HEALTHCHECK
HEALTHCHECK --interval=30s --timeout=3s --start-period=10s CMD curl -f http://localhost:3010/health || exit 1

# Expose the port on which the app will run
EXPOSE 3010
