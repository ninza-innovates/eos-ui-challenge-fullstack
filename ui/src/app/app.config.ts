import { ApplicationConfig } from '@angular/core';
import { provideHttpClient } from '@angular/common/http';
import { provideStore } from '@ngxs/store';
import { JobSummaryStoreState } from './job-summary/store/job-summary.store.state';

export const appConfig: ApplicationConfig = {
  providers: [
    provideHttpClient(),
    provideStore(
      [
        JobSummaryStoreState
      ],
      { developmentMode: true }
    )
  ]
};
