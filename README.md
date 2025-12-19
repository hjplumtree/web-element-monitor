# Web Element Monitor

A system to monitor changes in web page elements (DOM) and trigger notifications.

## Architecture

The system consists of three main components:

1.  **Chrome Extension** (`apps/extension`): Allows users to navigate to any URL, select a DOM element visually, and send the monitoring configuration to the API.
2.  **Server API** (`apps/api`): A Node.js service (Cloud Run Service) that manages users and monitoring targets. Stores data in Supabase (PostgreSQL).
3.  **Monitoring Job** (`apps/monitor`): A Node.js Playwright job (Cloud Run Job) that runs periodically. It fetches active targets, visits pages, extracts values, and compares them with previous records.

## Repository Structure

```
/
├── apps/
│   ├── extension/          # Chrome Extension (Manifest V3)
│   ├── api/                # API Service (Express)
│   └── monitor/            # Monitoring Worker (Playwright)
├── infra/                  # Infrastructure configuration (GCP, Supabase)
├── docs/                   # Additional documentation
└── package.json            # Root configuration (Workspaces)
```

## Getting Started

### Prerequisites
- Node.js (v18+)
- npm

### Installation
1. Install dependencies:
   ```bash
   npm install
   ```
2. Setup workspaces (automatic via npm install).

### Development

- **Extension**: Load `apps/extension` as an unpacked extension in Chrome.
- **API**:
  ```bash
  npm run dev:api
  ```
- **Monitor**:
  ```bash
  npm run dev:monitor
  ```

## Design Decisions

- **Monorepo**: Keeps related components together for easier management.
- **Playwright**: Robust handling of dynamic content and SPAs.
- **Separation of Concerns**: The extension is only for selection; the server handles the heavy lifting (monitoring), keeping the client lightweight and ensuring 24/7 monitoring even when the user is offline.
