import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { getTestScheduler } from 'jasmine-marbles';
import { JobCardComponent } from './job-card.component';
import { MaterialModule } from 'src/app/material.module';
import { JobsService } from '../../core/jobs.service';
import { JobServiceMock } from '../../mocks/job.service.mock';
import { DebugElement } from '@angular/core';
import { By } from '@angular/platform-browser';
import { testJob as testCard} from '../../mocks/job';

describe('JobCardComponent', () => {
  let component: JobCardComponent;
  let debugEl: DebugElement;
  let fixture: ComponentFixture<JobCardComponent>;
  let originalTimeout: number;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ JobCardComponent ],
      imports: [MaterialModule],
      providers: [{provide: JobsService, useValue: new JobServiceMock()}]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    originalTimeout = jasmine.DEFAULT_TIMEOUT_INTERVAL;
    jasmine.DEFAULT_TIMEOUT_INTERVAL = 1000;
    fixture = TestBed.createComponent(JobCardComponent);
    debugEl = fixture.debugElement;
    component = fixture.componentInstance;
    component.card = testCard;
    component.activeJob = testCard;
    getTestScheduler().flush(); // flush the observables
    fixture.detectChanges();
  });

  afterEach(() => {
    jasmine.DEFAULT_TIMEOUT_INTERVAL = originalTimeout;
  });

  afterAll(() => {
    fixture.destroy();
  });

  it('should be created', () => {
    expect(component).toBeTruthy();
  });

  it('should show thumbnail with face icon inside', () => {
    const thumb = debugEl.query(By.css('.job-card-thumb'));
    expect(thumb).toBeTruthy();
    expect(thumb.query(By.css('.icon'))).toBeTruthy();
  });

  it('should show job title', () => {
    const title = debugEl.query(By.css('.job-card-content-title'));
    expect(title.nativeElement.textContent).toContain(testCard.title.slice(0, 15));
  });

  it('should show job categories icons', async(() => {
    component.ready.subscribe(ready => {
      if (ready) {
        fixture.detectChanges();
        const categories = debugEl.query(By.css('.job-card-content-body-categories'));
        const icons = categories.queryAll(By.css('.icon'));
        expect(icons.length).toBe(2);
        expect(icons[0].nativeElement.textContent).toBe('accessible');
      }
    });
  }));

  it('should show job award status', async(() => {
    expect(debugEl.query(By.css('.job-card-content-body-awarded'))).toBeFalsy();
    component.card = Object.assign({}, component.card, {is_awarded: true});
    component.ready.subscribe(ready => {
      if (ready) {
        fixture.detectChanges();
        expect(debugEl.query(By.css('.job-card-content-body-awarded'))).toBeTruthy();
      }
    });
  }));

  it('should show selected status if selected', async(() => {
    expect(debugEl.query(By.css('.job-card')).classes['active']).toBeTruthy();
    component.activeJob = Object.assign({}, component.activeJob, {id: '1'});
    fixture.detectChanges();
    expect(debugEl.query(By.css('.job-card')).classes['active']).toBeFalsy();
  }));

  it('should emmit event when clicked on its title', async(() => {
    spyOn(component, 'setActive');
    spyOn(component.selectJob, 'emit');
    const title = debugEl.query(By.css('.job-card-content-title')).nativeElement;
    title.click();
    fixture.whenStable().then(() => {
      fixture.detectChanges();
      expect(component.setActive).toHaveBeenCalledWith();
      // expect(component.selectJob.emit).toHaveBeenCalledWith(testCard);
    });
  }));

});
