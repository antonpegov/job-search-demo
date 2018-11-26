import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { getTestScheduler } from 'jasmine-marbles';
import { JobInfoComponent } from './job-info.component';
import { JobsService } from '../../core/jobs.service';
import { JobServiceMock } from '../../mocks/job.service.mock';
import { testJob } from '../../mocks/job';
import { DebugElement } from '@angular/core';
import { By } from '@angular/platform-browser';

describe('JobInfoComponent', () => {
  let component: JobInfoComponent;
  let debugEl: DebugElement;
  let fixture: ComponentFixture<JobInfoComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [JobInfoComponent],
      providers: [{provide: JobsService, useValue: new JobServiceMock()}]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(JobInfoComponent);
    component = fixture.componentInstance;
    debugEl = fixture.debugElement;
    component.job = testJob;
    getTestScheduler().flush();
    fixture.detectChanges();
  });

  afterAll(() => {
    fixture.destroy();
  });

  it('should be created', () => {
    expect(component).toBeTruthy();
  });

  it('should show job info', () => {
    component.ready = true;
    fixture.detectChanges();
    const titleBlock = debugEl.queryAll(By.css('.job-info-block-label'))
      .filter((item) => item.nativeElement.textContent === 'Title')[0].parent;
    const title = titleBlock.query(By.css('.job-info-block-value')).nativeElement.textContent.trim();
    expect(title).toEqual(testJob.title);
   });

  it('should show job categories as string', async((done) => {
    const str = 'accesible help, electrical work';
    const emitCategoriesSpy = spyOn<any>(component, 'emitCategories');
    spyOn(component, 'categoriesString');
    component.ngOnChanges({job: {currentValue: testJob, previousValue: null, firstChange: null, isFirstChange: () => false}});
    fixture.detectChanges();
    expect(emitCategoriesSpy).toHaveBeenCalledWith();
    // expect(component.categoriesString.emit).toHaveBeenCalledWith();
  }));
});
