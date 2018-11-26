import { Component, OnInit, Input, OnChanges, SimpleChanges, SimpleChange, EventEmitter } from '@angular/core';
import { JobData } from '../../types/job-data';
import { JobsService } from '../../core/jobs.service';

@Component({
  selector: 'app-job-info',
  templateUrl: './job-info.component.pug',
  styleUrls: ['./job-info.component.sass']
})
export class JobInfoComponent implements OnInit, OnChanges {

  @Input() public job: JobData;
  public ready = false;
  public categoriesString = new EventEmitter<string>();

  constructor(
    private $jobs: JobsService
  ) { }

  public ngOnChanges(changes: SimpleChanges) {
    const job: SimpleChange = changes.job;
    if (job.currentValue) {
      this.ready = true;
      this.emitCategories();
    }
    // console.log('prev value: ', job.previousValue);
    // console.log('got name: ', job.currentValue);
  }

  public ngOnInit() {
  }

  private emitCategories() {
    this.$jobs.categories.subscribe(_categories => {
      if (_categories.size > 0) {
        let str = '';
        this.job.categories.forEach((value, key, map) => {
          str += _categories.get(value.id).name + ', ';
        });
        this.categoriesString.emit(str.slice(0, -2));
      } else {
        this.categoriesString.emit('-');
      }
    });
  }
}
