import { ChangeDetectionStrategy, Component } from '@angular/core';

// TODO: Import and add JobsSummaryComponent to `imports` once implemented.
// import { JobsSummaryComponent } from './job-summary/components/jobs-summary/jobs-summary.component';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [
    // JobStatusSummaryComponent,
  ],
  template: `
    <main style="max-width: 960px; margin: 32px auto; padding: 0 16px;">
      <h1 style="margin-bottom: 24px; font-size: 20px; font-weight: 700;">
        EOS — Job Status Summary
      </h1>

      <!-- TODO: Uncomment once JobStatusSummaryComponent is implemented -->
      <!-- <app-jobs-summary /> -->

      <p style="color: #6b778c; font-style: italic;">
        Implement <code>JobsSummaryComponent</code> and uncomment the tag above.
      </p>
    </main>
  `,
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class AppComponent {}
