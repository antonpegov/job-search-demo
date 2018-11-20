import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { HttpClientModule } from '@angular/common/http';
import { CommonModule } from '@angular/common';
import { CalendarModule } from './jobs/jobs.module';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { MaterialModule } from './material.module';
import { SharedModule } from './shared/shared.module';
// import { SharedModule } from './shared/shared.module';

export const APP_IMPORTS = [
  BrowserAnimationsModule,
  CalendarModule,
  CommonModule,
  FormsModule,
  HttpClientModule,
  MaterialModule,
  ReactiveFormsModule,
  SharedModule,
];

export const APP_EXPORTS = [
  MaterialModule,
];
