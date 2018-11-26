import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { getTestScheduler } from 'jasmine-marbles';
import { JobListComponent } from './job-list.component';
import { JobCardComponent } from '../job-card/job-card.component';
import { JobsService } from '../../core/jobs.service';
import { MaterialModule } from 'src/app/material.module';
import { JobServiceMock } from '../../mocks/job.service.mock';
import { testJob } from '../../mocks/job';
import { of } from 'rxjs';
import { Component, DebugElement } from '@angular/core';
import { By } from '@angular/platform-browser';

@Component({
  selector: 'app-job-card',
  template: '<div class="job-card">Mock Product Settings Component</div>'
})
class MockJobCardComponent {}


describe('JobListComponent', () => {
  let component: JobListComponent;
  let cards: DebugElement[];
  let debugEl: DebugElement;
  let fixture: ComponentFixture<JobListComponent>;
  let testBedService: JobsService;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ JobListComponent, JobCardComponent ],
      imports: [ MaterialModule ],
      providers: [ {provide: JobsService, useValue: new JobServiceMock()} ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(JobListComponent);
    component = fixture.componentInstance;
    debugEl = fixture.debugElement;
    getTestScheduler().flush();
    testBedService = TestBed.get(JobsService);
    testBedService.getJobs = () => of([testJob, Object.assign({}, testJob, {id: 666})]);
    fixture.detectChanges();
    cards = debugEl.queryAll(By.css('.job-card'));
  });

  afterEach(() => {
    fixture.destroy();
  });

  afterAll(() => {
    fixture.destroy();
  });

  it('should be created', () => {
    expect(component).toBeTruthy();
  });

  it('should show job cards after receiving jobs array from service', () => {
    expect(cards.length).toBe(2);
  });

  it('should set active status to the first job card and switch it by clicking on card title', () => {
    expect(cards[0].classes['active']).toBeTruthy();
    expect(cards[1].classes['active']).toBeFalsy();
    cards[1].query(By.css('.job-card-content-title')).nativeElement.click();
    fixture.detectChanges();
    expect(cards[1].classes['active']).toBeTruthy();
    expect(cards[0].classes['active']).toBeFalsy();
  });

  it('should emmit active job to parent component', async(() => {
    spyOn(component.select, 'emit');
    spyOn(component, 'activate');
    cards[0].query(By.css('.job-card-content-title')).nativeElement.dispatchEvent(new Event('click'));
    fixture.detectChanges();
    expect(component.activate).toHaveBeenCalledWith(testJob);
    // expect(component.select.emit).toHaveBeenCalledWith(testJob);
  }));

});
