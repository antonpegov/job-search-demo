import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { map } from 'rxjs/operators';
import { environment as env } from '../../../environments/environment';
import { ApiResponse } from '../types/api-response';
import { JobData } from '../types/job-data';
import { Observable } from 'rxjs';
import { JobFilter } from '../types/jobs-filter';
import { JobPlace } from '../types/job-place';
import { JobCategory } from '../types/job-category';
@Injectable({
  providedIn: 'root'
})
export class JobsService {
    public constructor(
      private $http: HttpClient,
  ) {

  }

  getJobs(filter: JobFilter = {}): Observable<JobData[]> {
    return this.$http.get<ApiResponse<JobData>>(env + 'jobs', {params: filter as any})
      .pipe(
        map((response: ApiResponse<JobData>) => response.body)
      );
  }

  getPlaces(): Observable<JobPlace[]> {
    return this.$http.get<ApiResponse<JobPlace>>(env + 'places')
      .pipe(
        map((response) => response.body)
      );
  }

  getCategories(): Observable<JobCategory[]> {
    return this.$http.get<ApiResponse<JobCategory>>(env + 'categories')
      .pipe(
        map((response) => response.body)
      );
  }


}
