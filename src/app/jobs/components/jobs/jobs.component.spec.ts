import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { JobsComponent } from './jobs.component';
import { JobListComponent } from '../job-list/job-list.component';
import { JobInfoComponent } from '../job-info/job-info.component';
import { MaterialModule } from 'src/app/material.module';
import { JobCardComponent } from '../job-card/job-card.component';
import { HttpClient } from 'selenium-webdriver/http';
import { HttpClientModule } from '@angular/common/http';

describe('JobsComponent', () => {
  let component: JobsComponent;
  let fixture: ComponentFixture<JobsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
    imports: [ MaterialModule, HttpClientModule ],
      declarations: [ JobsComponent, JobListComponent, JobInfoComponent, JobCardComponent ],
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(JobsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should be created', () => {
    expect(component).toBeTruthy();
  });
});
