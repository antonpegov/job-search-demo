import { NgModule } from '@angular/core';
import { NotFound404Component } from './components/not-found404.component';
import { LoadingOverlayComponent, LoadingOverlayService } from './components/loading-overlay';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

const windowFactory = () => window;

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    NgbModule.forRoot(),
  ],
  exports: [
    // COMPONENTS
    LoadingOverlayComponent,
    NotFound404Component,
    // MODULES
    NgbModule,
    // PIPES
  ],
  declarations: [
    LoadingOverlayComponent,
    NotFound404Component,
  ],
  providers: [
    LoadingOverlayService,
  ]
})

export class SharedModule {
}
