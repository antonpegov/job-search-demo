import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { JobsComponent } from './components/jobs/jobs.component';
import { MaterialModule } from '../material.module';
import { JobsService } from './core/jobs.service';
import { JobListComponent } from './components/job-list/job-list.component';
import { JobInfoComponent } from './components/job-info/job-info.component';

@NgModule({
  imports: [
    CommonModule,
    MaterialModule,
  ],
  declarations: [JobsComponent, JobListComponent, JobInfoComponent],
  providers: [JobsService]
})
export class CalendarModule { }
