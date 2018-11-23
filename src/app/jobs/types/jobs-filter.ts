
export interface JobFilter {
  state?: JobState;
}

export enum JobState {
  Active = 'active',
  Inactive = 'inactive'
}
