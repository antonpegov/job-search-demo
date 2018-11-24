import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { JobData } from '../../types/job-data';
import { JobCategory } from '../../types/job-category';
import { JobsService } from '../../core/jobs.service';

@Component({
  selector: 'app-job-card',
  templateUrl: './job-card.component.pug',
  styleUrls: ['./job-card.component.sass']
})
export class JobCardComponent implements OnInit {

  @Input() public card: JobData;
  @Input() public activeJob: string;
  @Output() public selectJob = new EventEmitter();
  public categories: Map<string, JobCategory>;
  public ready = false;

  constructor(
    private $jobs: JobsService,
  ) { }

  public setActive() {
    this.selectJob.emit(this.card);
  }

  public ngOnInit() {
    this.$jobs.categories.subscribe(_categories => {
      this.categories = _categories;
      this.ready = true;
    });
  }

}
