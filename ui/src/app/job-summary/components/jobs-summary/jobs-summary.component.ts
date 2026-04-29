import {
  ChangeDetectionStrategy,
  Component,
  OnInit,
  inject
} from '@angular/core';
import { AsyncPipe } from '@angular/common';
import { Store } from '@ngxs/store';
import { JobSummaryStoreSelectors } from '../../store/job-summary.store.selectors';
import { JobSummaryStorePayload } from '../../store/job-summary.store.payload';
import { StatusBadgePipe } from '../../pipes/status-badge.pipe';
import { JobSummaryDataModel } from '../../models/job-summary.data.model';

/**
 * TODO: Implement JobStatusSummaryComponent.
 *
 * Requirements:
 *   - standalone: true
 *   - changeDetection: ChangeDetectionStrategy.OnPush
 *   - selector: 'app-jobs-summary'
 *   - Use inject() to get the Store (not constructor injection).
 *   - On init, dispatch LoadJobSummary to trigger the data fetch.
 *   - Expose two observables from selectors (use select() or selectSignal()):
 *       filteredItems$  — the filtered job list
 *       regions$        — the unique region names for the dropdown
 *   - Do NOT call .subscribe() in the class body; use the async pipe in the template.
 *
 * Template must include:
 *   1. A <select> dropdown for region filtering.
 *        - First option: "All Regions" with value "" (empty string → null filter).
 *        - Remaining options: one per region from regions$.
 *        - On change, dispatch SetRegionFilter with the selected value (or null if empty).
 *   2. A table (or list) of jobs from filteredItems$ with columns:
 *        Job Name | Status | Region | Days Planned | % Complete
 *   3. Use StatusBadgePipe on the status cell.
 *   4. Use trackBy on *ngFor to track by job id.
 */
@Component({
  selector: 'app-jobs-summary',
  standalone: true,
  imports: [
    AsyncPipe,
    StatusBadgePipe
  ],
  templateUrl: './jobs-summary.component.html',
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class JobStatusSummaryComponent implements OnInit {
  private store = inject(Store);

  filteredItems$ = this.store.select(JobSummaryStoreSelectors.filteredItems);
  regions$ = this.store.select(JobSummaryStoreSelectors.regions);

  ngOnInit(): void {
    this.store.dispatch(new JobSummaryStorePayload.LoadJobSummary());
  }

  onRegionChange(event: Event): void {
    const selectedValue = (event.target as HTMLSelectElement).value;
    this.store.dispatch(
      new JobSummaryStorePayload.SetRegionFilter(selectedValue || null)
    );
  }

  trackByJobId(_index: number, item: JobSummaryDataModel.Item): string {
    return item.jobId;
  }
}
