import { mapDtoToJobSummaryItem } from './job-summary.data.map';
import { DtoJobSummaryDataModel } from './dto-job-summary.data.model';

describe('mapDtoToJobSummaryItem', () => {
  const dto: DtoJobSummaryDataModel.Item = {
    job_id: 'job-001',
    pad_name: 'Permian Basin Alpha',
    status_name: 'Active',
    region_name: 'Permian',
    plan_start_date: '2025-03-01',
    days_planned: 45,
    percent_complete: 62
  };

  it('should map all fields to camelCase', () => {
    expect(mapDtoToJobSummaryItem(dto)).toEqual({
      jobId: 'job-001',
      padName: 'Permian Basin Alpha',
      statusName: 'Active',
      regionName: 'Permian',
      planStartDate: '2025-03-01',
      daysPlanned: 45,
      percentComplete: 62
    });
  });

  it('should handle every field without throwing', () => {
    expect(() => mapDtoToJobSummaryItem(dto)).not.toThrow();
  });
});
