import { TestBed } from '@angular/core/testing';
import { HttpClientTestingModule, HttpTestingController } from '@angular/common/http/testing';
import { JobsService } from './jobs.service';
import { JobData } from '../types/job-data';
import { HttpClient } from '@angular/common/http';
import { environment as env } from '../../../environments/environment';
import * as jobsJson from '../../../../api/jobs.json';
import * as categoriesJson from '../../../../api/categories.json';
import * as placesJson from '../../../../api/places.json';
import { JobState } from '../types/jobs-filter';
import { JobCategory } from '../types/job-category';
import { JobPlace } from '../types/job-place';

describe('JobsService', () => {

  let service: JobsService;
  let httpMock: HttpTestingController;

  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [JobsService],
      imports: [
        HttpClientTestingModule
      ],
    });
    // inject the service
    service = TestBed.get(JobsService);
    httpMock = TestBed.get(HttpTestingController);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });

  it('should be able to get all jobs', () => {
    service.getJobs().subscribe((jobs: JobData[]) => {
      expect(jobs.length).toBe(4);
    });

    const req = httpMock.expectOne(_req => _req.method === 'GET' && _req.url === env + 'jobs');
    req.flush(jobsJson.default);

    httpMock.verify();
  });

  it('should be able to get only active jobs', () => {
    service.getJobs({state: JobState.Active}).subscribe((jobs: JobData[]) => {
      expect(jobs.length).toBe(3);
    });

    const req = httpMock.expectOne(_req => _req.method === 'GET' && _req.url === env + 'jobs');
    req.flush(Object.assign(
      {},
      jobsJson.default,
      { body: jobsJson.default.body.filter(item => item.state === 'active')}
    ));

    httpMock.verify();
  });

  it('should be able to get all categories', () => {
    service.getCategories().subscribe((categories: JobCategory[]) => {
      expect(categories.length).toBe(4);
    });

    const req = httpMock.expectOne(_req => _req.method === 'GET' && _req.url === env + 'categories');
    req.flush(categoriesJson.default);

    httpMock.verify();
  });

  it('should be able to get all places', () => {
    service.getPlaces().subscribe((categories: JobPlace[]) => {
      expect(categories.length).toBe(2);
    });

    const req = httpMock.expectOne(_req => _req.method === 'GET' && _req.url === env + 'places');
    req.flush(placesJson.default);

    httpMock.verify();
  });

});
