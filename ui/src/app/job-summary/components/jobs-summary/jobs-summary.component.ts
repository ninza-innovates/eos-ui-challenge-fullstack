import { ChangeDetectionStrategy, Component, OnInit } from '@angular/core';
import { AsyncPipe } from '@angular/common';
import { Store } from '@ngxs/store';
// TODO: Import your selectors, payload, and pipe once implemented.
// import { JobSummaryStoreSelectors } from '../../store/job-summary.store.selectors';
// import { JobSummaryStorePayload } from '../../store/job-summary.store.payload';
// import { StatusBadgePipe } from '../../pipes/status-badge.pipe';

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
    // StatusBadgePipe,
  ],
  templateUrl: './jobs-summary.component.html',
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class JobStatusSummaryComponent implements OnInit {
  private store = inject(Store);

  // TODO: Declare filteredItems$ and regions$ observables using store.select().

  ngOnInit(): void {
    // TODO: Dispatch LoadJobSummary here.
  }

  onRegionChange(event: Event): void {
    // TODO: Read the selected value from the event target and dispatch SetRegionFilter.
    // Pass null when the user selects "All Regions".
  }
}

// Add this import at the top once Store is used
function inject<T>(token: any): T {
  // This stub keeps the file compilable before implementation.
  // Replace with Angular's inject() from @angular/core once you wire up the imports.
  throw new Error('Replace this stub with: import { inject } from "@angular/core"');
}
