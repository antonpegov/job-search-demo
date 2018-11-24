import { Component, OnInit, Output, EventEmitter } from '@angular/core';
import { JobData } from '../../types/job-data';
import { JobsService } from '../../core/jobs.service';
import { JobState } from '../../types/jobs-filter';

@Component({
  selector: 'app-job-list',
  templateUrl: './job-list.component.pug',
  styleUrls: ['./job-list.component.sass']
})
export class JobListComponent implements OnInit {

  @Output() public select = new EventEmitter<JobData>();
  public activeJob: JobData;
  public ready = false;
  public jobs: JobData[];

  constructor(
    private $jobs: JobsService
  ) { }

  public activate(_job: JobData) {
    this.activeJob = _job;
    this.select.emit(this.activeJob);
  }

  public ngOnInit() {
    this.$jobs.getJobs({state: JobState.Active}).subscribe(_jobs => {
      this.jobs = _jobs;
      this.activeJob = this.jobs[0];
      this.ready = true;
    });
  }

}
