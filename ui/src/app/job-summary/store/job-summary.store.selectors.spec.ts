/**
 * BONUS: Unit tests for the filteredItems selector.
 *
 * NGXS selectors are plain static methods — you can test them without a Store.
 */

// TODO: Uncomment and complete once your selectors are implemented.

// import { JobSummaryStoreSelectors } from './job-summary.store.selectors';
// import { JobSummaryStoreModel } from './job-summary.store.model';
// import { JobSummaryDataModel } from '../models/job-summary.data.model';

// const makeItem = (overrides: Partial<JobSummaryDataModel.Item>): JobSummaryDataModel.Item => ({
//   jobId: 'job-001',
//   jobName: 'Test Job',
//   statusName: 'Active',
//   regionName: 'Permian',
//   planStartDate: '2025-03-01',
//   daysPlanned: 45,
//   percentComplete: 62,
//   ...overrides
// });

// describe('JobSummaryStoreSelectors', () => {
//   describe('filteredItems', () => {
//     it('should return all items when selectedRegion is null', () => {
//       const state: JobSummaryStoreModel.State = {
//         items: [makeItem({ regionName: 'Permian' }), makeItem({ regionName: 'Eagle Ford' })],
//         selectedRegion: null,
//         loading: false
//       };
//       const result = JobSummaryStoreSelectors.filteredItems(state);
//       expect(result.length).toBe(2);
//     });
//
//     it('should filter items by the selected region', () => {
//       const state: JobSummaryStoreModel.State = {
//         items: [
//           makeItem({ jobId: 'job-001', regionName: 'Permian' }),
//           makeItem({ jobId: 'job-002', regionName: 'Eagle Ford' })
//         ],
//         selectedRegion: 'Permian',
//         loading: false
//       };
//       const result = JobSummaryStoreSelectors.filteredItems(state);
//       expect(result.length).toBe(1);
//       expect(result[0].regionName).toBe('Permian');
//     });
//   });
//
//   describe('regions', () => {
//     it('should return a sorted list of unique region names', () => {
//       const items = [
//         makeItem({ regionName: 'Permian' }),
//         makeItem({ regionName: 'Eagle Ford' }),
//         makeItem({ regionName: 'Permian' })   // duplicate
//       ];
//       const result = JobSummaryStoreSelectors.regions(items);
//       expect(result).toEqual(['Eagle Ford', 'Permian']);
//     });
//   });
// });
