# Day 1 - NestJS Starter

Simple NestJS application with health check endpoint.

## Features

- Health check endpoint
- Unit tests
- Docker support

## Setup

### Prerequisites

- Node.js 18+ LTS
- Docker & Docker Compose
- npm

### Installation

\`\`\`bash
npm install
\`\`\`

## Run Locally

\`\`\`bash
# Development mode (auto-reload)
npm run start:dev

# Production mode
npm run build
npm run start:prod
\`\`\`

## Run with Docker

\`\`\`bash
# Build and start
docker compose up --build

# Run in background
docker compose up -d

# Stop
docker compose down
\`\`\`

## Test

\`\`\`bash
# Run all tests
npm test

# Watch mode
npm test -- --watch

# Coverage
npm test -- --coverage
\`\`\`

## API Endpoints

### GET /health

Returns application health status.

**Response:**
json
{
  "status": "ok",
  "timestamp": "2025-01-30T10:00:00.000Z",
  "uptime": 123.45,
  "environment": "development"
}

## Project Structure

src/
├── health/
│   ├── health.controller.ts      # Health endpoint
│   ├── health.controller.spec.ts # Controller tests
│   ├── health.service.ts         # Health logic
│   ├── health.service.spec.ts    # Service tests
│   └── health.module.ts          # Health module
├── app.module.ts                 # Root module
└── main.ts                       # Entry point
