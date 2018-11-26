import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { map, shareReplay } from 'rxjs/operators';
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

  private categoryCache: Observable<Map<string, JobCategory>>;

  constructor(
      private $http: HttpClient,
  ) {

  }

  get categories() {
    if (!this.categoryCache) {
      this.categoryCache = this.getCategories().pipe(
        shareReplay()
      );
    }
    return this.categoryCache;
  }

  public getJobs(filter: JobFilter = {}): Observable<JobData[]> {
    return this.$http.get<ApiResponse<JobData>>(env.api + 'jobs', {params: filter as any})
      .pipe(
        map((response: ApiResponse<JobData>) => response.body)
      );
  }

  public getPlaces(): Observable<JobPlace[]> {
    return this.$http.get<ApiResponse<JobPlace>>(env.api + 'places')
      .pipe(
        map((response) => response.body)
      );
  }

  private getCategories(): Observable<Map<string, JobCategory>> {
    return this.$http.get<ApiResponse<JobCategory>>(env.api + 'categories')
      .pipe(
        map((response) => {
          // const categoryMap = new Map();
          const sortedCategories = response.body.sort((a, b) => {
            if (a.name > b.name) {
              return 1;
            } else if (a.name > b.name) {
              return -1;
            }
            return 0;
          });
          const categoryMap = sortedCategories.reduce((acc, item) => {
            return acc.set(item.id, item);
          }, new Map());
          return categoryMap;
        })
      );
  }


}
