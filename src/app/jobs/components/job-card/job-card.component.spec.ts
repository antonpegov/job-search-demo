import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { JobCardComponent } from './job-card.component';
import { JobData } from '../../types/job-data';

describe('JobCardComponent', () => {
  let component: JobCardComponent;
  let fixture: ComponentFixture<JobCardComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ JobCardComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(JobCardComponent);
    component = fixture.componentInstance;
    component.card = testCard;
    fixture.detectChanges();
  });

  it('should be created', () => {
    expect(component).toBeTruthy();
  });

  it('should show thumbnail', () => {
    expect(true).toBe(false);
    pending();
  });

  it('should show job title', () => {
    expect(true).toBe(false);
    pending();
  });

  it('should show job categories icons', () => {
    expect(true).toBe(false);
    pending();
  });

  it('should show job award status if it set', () => {
    expect(true).toBe(false);
    pending();
  });

  it('should not show job award status if it not set', () => {
    expect(true).toBe(false);
    pending();
  });
});

export const testCard: JobData = {
  id: '68934444',
  title: '2 Scheiben in Altbau-Balkontr austauschen 2 Scheiben in Altbau-Balkontr austauschen 2 Scheiben in Altbau-Balkontr austauschen',
  zip_code: '10115',
  city: 'Berlin',
  thumbnail: '//placekitten.com/150/150',
  attachments: [],
  counter: {
    messages_total: 1,
    messages_unread: 0
  },
  is_awarded: false,
  categories: [
    {
      id: '33'
    }
  ],
  state: 'active',
  // tslint:disable-next-line:max-line-length
  description: 'Ei vel exerci eripuit apeirian. Mei ei partiendo consetetur honestatis. Eam et percipit argumentum. Indoctum sapientem nec ut, ea vel wisi equidem. Pro meliore elaboraret no. Habemus contentiones ne vix, simul audire pro at, ludus vidisse ei mei.\r\n\r\nEum alia concludaturque cu, nam veri utinam ea. No cetero commune placerat nam.',
  end_date: '2018-11-28T16:10:02+01:00',
  created_at: '2018-10-11T04:14:32+02:00'
};
