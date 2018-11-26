import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { JobsComponent } from './components/jobs/jobs.component';
import { MaterialModule } from '../material.module';
import { JobsService } from './core/jobs.service';
import { JobListComponent } from './components/job-list/job-list.component';
import { JobInfoComponent } from './components/job-info/job-info.component';
import { JobCardComponent } from './components/job-card/job-card.component';
import { HttpClientModule } from '@angular/common/http';

@NgModule({
  imports: [
    CommonModule,
    MaterialModule,
  ],
  declarations: [JobsComponent, JobListComponent, JobInfoComponent, JobCardComponent],
  providers: [JobsService]
})
export class CalendarModule { }
