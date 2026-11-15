"""Tests for the jobs router. FastAPI injects query defaults; call the
functions with explicit None so the filter logic is exercised directly.
"""

import unittest

from fastapi import HTTPException

from app.main import app
from app.routers.jobs import get_job, get_jobs, get_regions


class GetJobsTests(unittest.TestCase):
    def test_returns_every_job_when_filters_are_omitted(self):
        jobs = get_jobs(region=None, status=None)

        self.assertEqual(
            [job.job_id for job in jobs],
            [
                "job-001",
                "job-002",
                "job-003",
                "job-004",
                "job-005",
                "job-006",
                "job-007",
                "job-008",
            ],
        )

    def test_region_filter_is_case_insensitive(self):
        jobs = get_jobs(region="permian", status=None)

        self.assertEqual([job.job_id for job in jobs], ["job-001", "job-004"])
        self.assertTrue(all(job.region_name == "Permian" for job in jobs))

    def test_status_filter_is_case_insensitive(self):
        jobs = get_jobs(region=None, status="on hold")

        self.assertEqual([job.job_id for job in jobs], ["job-006"])
        self.assertEqual(jobs[0].status_name, "On Hold")

    def test_region_and_status_filters_combine(self):
        jobs = get_jobs(region="Eagle Ford", status="Planned")

        self.assertEqual([job.job_id for job in jobs], ["job-002"])

    def test_unknown_filter_returns_an_empty_list(self):
        self.assertEqual(get_jobs(region="Bakken", status=None), [])
        self.assertEqual(get_jobs(region="Permian", status="Complete"), [])

    def test_filtering_does_not_change_later_unfiltered_results(self):
        get_jobs(region="Permian", status="Active")

        self.assertEqual(len(get_jobs(region=None, status=None)), 8)


class GetRegionsTests(unittest.TestCase):
    def test_returns_sorted_unique_region_names(self):
        self.assertEqual(
            get_regions(),
            ["Eagle Ford", "Haynesville", "Marcellus", "Permian"],
        )


class GetJobTests(unittest.TestCase):
    def test_returns_the_matching_job(self):
        job = get_job("job-003")

        self.assertEqual(job.pad_name, "Haynesville Gamma")
        self.assertEqual(job.status_name, "Complete")
        self.assertEqual(job.region_name, "Haynesville")
        self.assertEqual(job.days_planned, 20)
        self.assertEqual(job.percent_complete, 100)

    def test_unknown_job_id_raises_not_found(self):
        with self.assertRaises(HTTPException) as caught:
            get_job("missing")

        self.assertEqual(caught.exception.status_code, 404)
        self.assertEqual(caught.exception.detail, "Job 'missing' not found")


class RouteRegistrationTests(unittest.TestCase):
    def test_regions_route_is_registered_before_the_job_id_route(self):
        paths = [getattr(route, "path", None) for route in app.routes]

        self.assertIn("/api/jobs", paths)
        self.assertIn("/api/jobs/regions", paths)
        self.assertIn("/api/jobs/{job_id}", paths)
        self.assertLess(
            paths.index("/api/jobs/regions"),
            paths.index("/api/jobs/{job_id}"),
        )
