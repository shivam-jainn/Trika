# Stage 1: Build
FROM node:20-alpine AS builder
WORKDIR /app

# Install pnpm globally
RUN npm install -g pnpm

# Copy package.json and pnpm-lock.yaml, and install dependencies
COPY package*.json .
COPY pnpm-lock.yaml .
RUN pnpm install

# Copy the rest of the source code
COPY . .

# Build the React app
RUN pnpm run build

# Stage 2: Serve the React app
FROM node:20-alpine AS runner
WORKDIR /app

# Install a simple static server to serve the React app
RUN npm install -g serve

# Create non-root user and install curl for HEALTHCHECK
RUN addgroup -S app && adduser -S app -G app \
    && apk add --no-cache curl

# Copy the build artifacts from the builder stage
COPY --from=builder /app/dist /app

# Use non-root user for serving
USER app

# Expose the necessary port
EXPOSE 3001

# HEALTHCHECK
HEALTHCHECK --interval=30s --timeout=3s --start-period=10s CMD curl -f http://localhost:3001/ || exit 1

# Start the React app using the 'serve' command
CMD ["serve", "-s", ".", "-l", "3001"]
