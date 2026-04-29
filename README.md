# EOS UI Challenge (Fullstack)

This repository contains a FastAPI backend and an Angular frontend for a job status summary challenge.  
The backend exposes job endpoints with filtering, and the frontend renders a filterable jobs table using NGXS state.

## Project Structure

- `backend/` FastAPI app
- `ui/` Angular app

## Prerequisites

- Python 3.10+
- Node.js 18+ and npm

## Run Backend (FastAPI)

```bash
cd backend
python -m venv .venv
```

Activate virtual environment:

- PowerShell:

```bash
.venv\Scripts\Activate.ps1
```

- macOS/Linux:

```bash
source .venv/bin/activate
```

Install dependencies and run:

```bash
pip install -r requirements.txt
uvicorn app.main:app --reload --port 8000
```

Backend base URL: `http://127.0.0.1:8000`

Useful endpoints:

- `GET /api/jobs`
- `GET /api/jobs?region=permian&status=active`
- `GET /api/jobs/regions`
- `GET /api/jobs/{job_id}`

## Run Frontend (Angular)

```bash
cd ui
npm install
npm start
```

Frontend URL: `http://localhost:4200`

## Quick Verification

- Backend:
  - Open `http://127.0.0.1:8000/docs` (Swagger UI), or
  - Run:

```bash
curl "http://127.0.0.1:8000/api/jobs/regions"
```

- Frontend:
  - Open `http://localhost:4200`
  - Confirm job rows render
  - Change region dropdown and verify table updates

## Tradeoffs / Assumptions

Implemented the required behavior in the provided stubs to align with the challenge structure and keep review straightforward. Backend filtering uses exact case-insensitive matching with AND logic, assuming `region` and `status` are canonical values rather than partial search terms. On the frontend, region filtering is handled in NGXS selectors to keep the component declarative and easier to test, at the cost of a bit more store boilerplate. The app intentionally uses the provided mock-backed service and lightweight inline styling to prioritize functional requirements over live API wiring and design-system setup.
>>>>>>> 3eb06fc (Add README.md)
