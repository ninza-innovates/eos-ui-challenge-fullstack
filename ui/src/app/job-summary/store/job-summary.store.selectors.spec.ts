import { JobSummaryStoreSelectors } from './job-summary.store.selectors';
import { JobSummaryStoreModel } from './job-summary.store.model';
import { JobSummaryDataModel } from '../models/job-summary.data.model';

const makeItem = (
  overrides: Partial<JobSummaryDataModel.Item> = {}
): JobSummaryDataModel.Item => ({
  jobId: 'job-001',
  padName: 'Permian Basin Alpha',
  statusName: 'Active',
  regionName: 'Permian',
  planStartDate: '2025-03-01',
  daysPlanned: 45,
  percentComplete: 62,
  ...overrides
});

describe('JobSummaryStoreSelectors', () => {
  describe('items', () => {
    it('should return the items stored on the state', () => {
      const items = [makeItem()];
      const state: JobSummaryStoreModel.State = {
        items,
        selectedRegion: null,
        loading: false
      };

      expect(JobSummaryStoreSelectors.items(state)).toBe(items);
    });
  });

  describe('filteredItems', () => {
    it('should return all items when selectedRegion is null', () => {
      const state: JobSummaryStoreModel.State = {
        items: [
          makeItem({ regionName: 'Permian' }),
          makeItem({ jobId: 'job-002', regionName: 'Eagle Ford' })
        ],
        selectedRegion: null,
        loading: false
      };

      expect(JobSummaryStoreSelectors.filteredItems(state)).toEqual(state.items);
    });

    it('should filter items by the selected region', () => {
      const permian = makeItem({ jobId: 'job-001', regionName: 'Permian' });
      const eagleFord = makeItem({ jobId: 'job-002', regionName: 'Eagle Ford' });
      const state: JobSummaryStoreModel.State = {
        items: [permian, eagleFord],
        selectedRegion: 'Permian',
        loading: false
      };

      expect(JobSummaryStoreSelectors.filteredItems(state)).toEqual([permian]);
    });

    it('should return no items when the selected region has no matches', () => {
      const state: JobSummaryStoreModel.State = {
        items: [makeItem({ regionName: 'Permian' })],
        selectedRegion: 'Marcellus',
        loading: false
      };

      expect(JobSummaryStoreSelectors.filteredItems(state)).toEqual([]);
    });
  });

  describe('regions', () => {
    it('should return a sorted list of unique region names', () => {
      const items = [
        makeItem({ regionName: 'Permian' }),
        makeItem({ regionName: 'Eagle Ford' }),
        makeItem({ regionName: 'Permian' })
      ];

      expect(JobSummaryStoreSelectors.regions(items)).toEqual(['Eagle Ford', 'Permian']);
    });
  });
});
