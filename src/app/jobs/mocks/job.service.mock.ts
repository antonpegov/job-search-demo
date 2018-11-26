import { cold } from 'jasmine-marbles';
import * as jobsJson from '../../../../api/jobs.json';

export class JobServiceMock {
  get categories() {
    return cold('--x|', { x: categoriesMap});
  }

  getJobs() {
    return cold('--x|', { x: jobsArray});
  }
}

export const categoriesMap = new Map([
  ['14', {id: '14', name: 'electrical work', icon: 'power'}],
  ['33', {id: '33', name: 'accesible help', icon: 'accessible'}],
  ['41', {id: '41', name: 'build', icon: 'build'}],
  ['58', {id: '58', name: 'paint', icon: 'format_paint'}]
]);

export const jobsArray = (jobsJson as any).body;
