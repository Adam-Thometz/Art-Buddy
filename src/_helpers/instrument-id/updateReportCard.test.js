import updateReportCard from "./updateReportCard";

import { instrumentIdReportCard } from '_data/_report-cards/initialReportCards';

describe('updateReportCard', () => {
  const group = instrumentIdReportCard.brass;
  const name = 'TRUMPET';
  it('should update if a unique value is passed in', () => {
    expect(updateReportCard({ group, name })).toEqual(['TRUMPET'])
  });
  
  it('should return the same array if a duplicate value is passed in', () => {
    group.push('TRUMPET');
    expect(updateReportCard({ group, name })).toEqual(group)
  });
});