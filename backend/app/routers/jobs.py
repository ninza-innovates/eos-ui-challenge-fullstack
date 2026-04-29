from fastapi import APIRouter, HTTPException, Query

from app.data import JOB_SUMMARY_DATA
from app.models import JobSummaryItem

router = APIRouter(prefix="/jobs", tags=["jobs"])


@router.get("", response_model=list[JobSummaryItem])
def get_jobs(
    region: str | None = Query(default=None, description="Filter by region name"),
    status: str | None = Query(default=None, description="Filter by status name"),
) -> list[JobSummaryItem]:
    """
    Return all job summaries, optionally filtered by region and/or status.

    TODO: Implement filtering logic.
          - When `region` is provided, return only jobs where region_name matches.
          - When `status` is provided, return only jobs where status_name matches.
          - Filters should be combinable (AND logic).
          - Matching should be case-insensitive.
    """
    filtered_jobs = JOB_SUMMARY_DATA

    if region is not None:
        region_filter = region.casefold()
        filtered_jobs = [
            job for job in filtered_jobs if job["region_name"].casefold() == region_filter
        ]

    if status is not None:
        status_filter = status.casefold()
        filtered_jobs = [
            job for job in filtered_jobs if job["status_name"].casefold() == status_filter
        ]

    return [JobSummaryItem(**job) for job in filtered_jobs]


@router.get("/regions", response_model=list[str])
def get_regions() -> list[str]:
    """
    Return a sorted list of unique region names across all jobs.

    TODO: Derive the list from JOB_SUMMARY_DATA and return it sorted alphabetically.
    """
    return sorted({job["region_name"] for job in JOB_SUMMARY_DATA})


@router.get("/{job_id}", response_model=JobSummaryItem)
def get_job(job_id: str) -> JobSummaryItem:
    """
    Return a single job by its job_id.

    TODO: Look up the job in JOB_SUMMARY_DATA.
          Raise an HTTP 404 if no matching job is found.
    """
    for job in JOB_SUMMARY_DATA:
        if job["job_id"] == job_id:
            return JobSummaryItem(**job)

    raise HTTPException(status_code=404, detail=f"Job '{job_id}' not found")
