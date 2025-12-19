# Infrastructure

This folder contains infrastructure-related code and documentation.

## Components

- **GCP**: Scripts or instructions for deploying to Google Cloud Run (Service & Job).
- **Supabase**: SQL schema and migration files.

## Deployment Overview

1. **API**: Build Docker image -> Deploy to Cloud Run Service.
2. **Monitor**: Build Docker image -> Deploy to Cloud Run Job (trigger via Cloud Scheduler).
