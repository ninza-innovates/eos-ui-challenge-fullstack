import { Pipe, PipeTransform } from '@angular/core';

/**
 * TODO: Implement StatusBadgePipe.
 *
 * Transform a status string into a CSS class for the badge element.
 * The global stylesheet already defines these classes (see src/styles.scss).
 *
 * Mapping:
 *   'Active'   → 'badge badge--active'
 *   'Planned'  → 'badge badge--planned'
 *   'Complete' → 'badge badge--complete'
 *   (anything else) → 'badge badge--default'
 *
 * Usage in template:
 *   <span [class]="job.statusName | statusBadge">{{ job.statusName }}</span>
 *
 * Requirements:
 *   - standalone: true
 *   - name: 'statusBadge'
 *   - pure: true (default — no need to set explicitly)
 */
@Pipe({
  name: 'statusBadge',
  standalone: true
})
export class StatusBadgePipe implements PipeTransform {
  transform(status: string): string {
    // TODO: Implement transformation logic.
    throw new Error('StatusBadgePipe not implemented');
  }
}
