import { ApplicationConfig } from '@angular/core';
import { provideHttpClient } from '@angular/common/http';
import { provideStore } from '@ngxs/store';

// TODO: Import and register JobSummaryStoreState here once implemented.
// import { JobSummaryStoreState } from './job-summary/store/job-summary.store.state';

export const appConfig: ApplicationConfig = {
  providers: [
    provideHttpClient(),
    provideStore(
      [
        // TODO: Add JobSummaryStoreState to this array
      ],
      { developmentMode: true }
    )
  ]
};
