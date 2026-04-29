/**
 * TODO: Define NGXS action classes for the job summary feature.
 *
 * Required actions:
 *
 *   LoadJobSummary  — triggers a data fetch; no constructor payload needed.
 *
 *   SetRegionFilter — sets the active region filter.
 *                     Payload: { region: string | null }
 *                     Passing null should clear the filter (show all regions).
 *
 * Use a namespace to group them:
 *
 *   export namespace JobSummaryStorePayload {
 *     export class LoadJobSummary {
 *       static readonly type = '[ Job Summary ] Load';
 *     }
 *     export class SetRegionFilter {
 *       static readonly type = '[ Job Summary ] Set Region Filter';
 *       constructor(public region: string | null) {}
 *     }
 *   }
 */
export namespace JobSummaryStorePayload {
  export class LoadJobSummary {
    static readonly type = '[ Job Summary ] Load';
  }

  export class SetRegionFilter {
    static readonly type = '[ Job Summary ] Set Region Filter';

    constructor(public region: string | null) {}
  }
}
