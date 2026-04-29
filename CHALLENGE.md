# EOS — Full-Stack Coding Challenge

## Overview

Build a **Job Summary** feature across two projects: a FastAPI backend and an Angular 18 + NGXS 18 frontend. Starter scaffolding and mock data are provided for both — the implementation is up to you.

---

## Setup

### Backend

```bash
cd backend
python -m venv .venv && source .venv/bin/activate
pip install -r requirements.txt
uvicorn app.main:app --reload   # API at http://localhost:8000
```

Interactive docs are available at `http://localhost:8000/docs`.

### Frontend

```bash
cd ui
npm install
npm start        # dev server at http://localhost:4200
npm test         # Karma unit tests
```

---

## What's provided

### Backend (`backend/`)

| File                  | Purpose                                           |
| --------------------- | ------------------------------------------------- |
| `app/main.py`         | FastAPI app with CORS configured (do not modify)  |
| `app/models.py`       | Pydantic response schema (do not modify)          |
| `app/data.py`         | In-memory mock dataset                            |
| `app/routers/jobs.py` | Incomplete router — your implementation goes here |

### Frontend (`ui/`)

| File                                                       | Purpose                                                           |
| ---------------------------------------------------------- | ----------------------------------------------------------------- |
| `src/app/mock/job-summary.mock.ts`                         | Local copy of mock data (matches the backend dataset)             |
| `src/app/job-summary/models/dto-job-summary.data.model.ts` | Raw API response interfaces (do not modify)                       |
| `src/app/job-summary/job-summary.data.service.ts`          | Service that returns mock data as an `Observable` (do not modify) |
| `src/app/app.component.ts`                                 | Shell component                                                   |
| `src/app/app.config.ts`                                    | App bootstrap                                                     |
| `src/styles.scss`                                          | Badge CSS classes already defined                                 |

---

## The Tasks

### Backend

Implement the three stubbed endpoints in `app/routers/jobs.py`. Each raises `NotImplementedError` and has a docstring describing the expected behavior.

| Endpoint                 | Description                                                                                              |
| ------------------------ | -------------------------------------------------------------------------------------------------------- |
| `GET /api/jobs`          | Return all jobs. Support optional `?region=` and `?status=` query filters (case-insensitive, AND logic). |
| `GET /api/jobs/regions`  | Return a sorted list of unique region names.                                                             |
| `GET /api/jobs/{job_id}` | Return a single job by ID. Return 404 if not found.                                                      |

### Frontend

Display a filterable list of job summaries. Users should be able to filter by region.

Use creativity in your UI development for displaying the Job info.

The stub files in the project indicate where we'd like the implementation to live, but you're free to deviate if you have good reason.

---

## Submission

Please submit either:

- A ZIP of the project (excluding `node_modules/` and `.venv/`), or
- A link to a Git branch / fork

Include a short note (3–5 sentences) describing any tradeoffs or assumptions you made.
