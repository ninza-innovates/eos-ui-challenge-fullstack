import { Selector } from '@ngxs/store';
import { JobSummaryStoreState } from './job-summary.store.state';
import { JobSummaryStoreModel as StateModel } from './job-summary.store.model';
import { JobSummaryDataModel } from '../models/job-summary.data.model';

/**
 * TODO: Implement the selector class.
 *
 * Required selectors:
 *
 *   items(state)
 *     Returns the full unfiltered items array from state.
 *
 *   filteredItems(state)
 *     Returns items filtered by state.selectedRegion.
 *     When selectedRegion is null, return all items.
 *
 *   regions(items)
 *     Derived from the items selector.
 *     Returns a sorted array of unique region names across all items.
 *     This drives the filter dropdown options.
 *
 * Use the @Selector decorator from @ngxs/store.
 * Compose selectors where it makes sense (e.g. regions can consume items).
 */
export class JobSummaryStoreSelectors {
  @Selector([JobSummaryStoreState])
  static items(state: StateModel.State): JobSummaryDataModel.Item[] {
    return state.items;
  }

  @Selector([JobSummaryStoreState])
  static filteredItems(state: StateModel.State): JobSummaryDataModel.Item[] {
    if (state.selectedRegion === null) {
      return state.items;
    }

    return state.items.filter((item) => item.regionName === state.selectedRegion);
  }

  @Selector([JobSummaryStoreSelectors.items])
  static regions(items: JobSummaryDataModel.Item[]): string[] {
    return [...new Set(items.map((item) => item.regionName))].sort((a, b) =>
      a.localeCompare(b)
    );
  }
}
