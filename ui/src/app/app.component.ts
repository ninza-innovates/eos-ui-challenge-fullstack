import { ChangeDetectionStrategy, Component } from '@angular/core';
import { JobStatusSummaryComponent } from './job-summary/components/jobs-summary/jobs-summary.component';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [
    JobStatusSummaryComponent
  ],
  template: `
    <main style="max-width: 960px; margin: 32px auto; padding: 0 16px;">
      <h1 style="margin-bottom: 24px; font-size: 20px; font-weight: 700;">
        EOS — Job Status Summary
      </h1>

      <app-jobs-summary />
    </main>
  `,
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class AppComponent {}
