# Contributing

This repo has two apps: a FastAPI backend in `backend/` and an Angular 18 app in `ui/`. Run commands from the directory named below. There is no root package manager.

## Prerequisites

- Python 3.10 or newer. Continuous integration uses Python 3.12.
- Node.js 18 or newer and npm. Continuous integration uses Node.js 20.
- A Chromium-based browser if you run the UI unit tests. Karma is configured with `karma-chrome-launcher`.

## Backend

Create a virtual environment, install the pinned dependencies, and start the API:

```bash
cd backend
python -m venv .venv
source .venv/bin/activate   # Windows PowerShell: .venv\Scripts\Activate.ps1
pip install -r requirements.txt
uvicorn app.main:app --reload --port 8000
```

The API listens at `http://127.0.0.1:8000`. Interactive docs are at `http://127.0.0.1:8000/docs`. CORS allows `GET` from `http://localhost:4200` only.

Endpoints:

- `GET /api/jobs`
- `GET /api/jobs?region=permian&status=active`
- `GET /api/jobs/regions`
- `GET /api/jobs/{job_id}` (404 when the id is unknown, for example `/api/jobs/missing`)

`requirements.txt` does not include a test runner, and there is no backend test suite. The check that CI runs, from `backend/`, is:

```bash
python -m pip install -r requirements.txt
python -m compileall -q app
python -c "from app.main import app"
```

A running server can also be checked with:

```bash
curl "http://127.0.0.1:8000/api/jobs/regions"
```

## UI

`ui/` has no lockfile. Install with npm, the same way CI does:

```bash
cd ui
npm install
npm start
```

`npm start` runs `ng serve` and opens the app at `http://localhost:4200`. The job list is served by `JobSummaryDataService` from `src/app/mock/job-summary.mock.ts`. It does not call the backend.

Tests and the production build:

```bash
npm test
npm run build
```

`npm test` runs `ng test` (Karma and Jasmine) and watches for changes. The specs under `src/app/job-summary/` cover camelCase mapping and the region selectors. For a single headless run:

```bash
npm test -- --watch=false --browsers=ChromeHeadless
```

CI does not run Karma. From `ui/` it runs `npm install` and `npm run build`, which writes `dist/eos-ui-challenge/`.

## Before you push

CI (`.github/workflows/ci.yml`) runs on every push and pull request:

- Backend: install `backend/requirements.txt`, compile `app`, and import `app.main:app`.
- UI: `npm install` and `npm run build`.

Keep `node_modules/`, `dist/`, `.angular/`, and `backend/.venv/` out of commits. They are already gitignored.
