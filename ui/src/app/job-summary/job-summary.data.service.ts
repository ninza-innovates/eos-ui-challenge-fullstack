import { Injectable } from '@angular/core';
import { Observable, of } from 'rxjs';
import { DtoJobSummaryDataModel } from './models/dto-job-summary.data.model';
import { JOB_SUMMARY_MOCK } from '../mock/job-summary.mock';

/**
 * Provided data service — do not modify.
 *
 * In a real implementation this would use HttpClient to call a backend
 * endpoint. For this exercise it returns static mock data so you can focus
 * on the state and component layers.
 */
@Injectable({ providedIn: 'root' })
export class JobSummaryDataService {
  getJobSummary(): Observable<DtoJobSummaryDataModel.Item[]> {
    return of(JOB_SUMMARY_MOCK);
  }
}
