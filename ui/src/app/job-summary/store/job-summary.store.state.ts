import { inject, Injectable } from '@angular/core';
import { Action, State, StateContext } from '@ngxs/store';
import { tap } from 'rxjs';
import { JobSummaryDataService } from '../job-summary.data.service';
import { JobSummaryStoreModel as StateModel } from './job-summary.store.model';
import { JobSummaryStorePayload as Payload } from './job-summary.store.payload';
import { mapDtoToJobSummaryItem } from '../models/job-summary.data.map';

/**
 * TODO: Implement the NGXS state class.
 *
 * Requirements:
 *   1. Decorate the class with @State<StateModel.State>({ name: 'jobSummary', defaults: StateModel.defaults })
 *   2. Use inject() for the data service (not constructor injection).
 *   3. Handle LoadJobSummary:
 *      - Set loading: true before the request.
 *      - Call this.dataService.getJobSummary().
 *      - Map each DTO item using mapDtoToJobSummaryItem.
 *      - Patch state with the mapped items and loading: false.
 *      - Return the observable so NGXS can manage the async lifecycle.
 *   4. Handle SetRegionFilter:
 *      - Patch selectedRegion in state with the incoming value.
 *
 * Hint: use patchState() from StateContext for partial updates.
 */
@Injectable()
@State<StateModel.State>({
  name: 'jobSummary',
  defaults: StateModel.defaults
})
export class JobSummaryStoreState {
  private dataService = inject(JobSummaryDataService);

  @Action(Payload.LoadJobSummary)
  loadJobSummary(ctx: StateContext<StateModel.State>) {
    ctx.patchState({ loading: true });

    return this.dataService.getJobSummary().pipe(
      tap((items) => {
        ctx.patchState({
          items: items.map(mapDtoToJobSummaryItem),
          loading: false
        });
      })
    );
  }

  @Action(Payload.SetRegionFilter)
  setRegionFilter(
    ctx: StateContext<StateModel.State>,
    action: Payload.SetRegionFilter
  ): void {
    ctx.patchState({ selectedRegion: action.region });
  }
}
