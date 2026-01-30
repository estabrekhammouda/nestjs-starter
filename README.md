# NestJS Starter

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
  npm install

# Development mode 
npm run start:dev

# Production mode
npm run build
npm run start:prod

## Run with Docker

#Build image
docker run -p 3000:3000 app-nest
#Run container
docker run -p 3000:3000 app-nest

## Test

# Run all tests
npm test
# Watch mode
npm test -- --watch
# Coverage
npm test -- --coverage

## API Endpoints

### GET /health
Returns application health status.
Get health 
API available at: http://localhost:3000
## Project Structure

