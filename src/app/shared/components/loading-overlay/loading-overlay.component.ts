import { Component, OnInit, ChangeDetectorRef } from '@angular/core';
import { LoadingOverlayService } from './loading-overlay.service';
import { LoadingOverlayConfig } from './loading-overlay.config';
import { debounceTime } from 'rxjs/operators';

@Component({
  selector: 'app-loading-overlay',
  templateUrl: 'loading-overlay.component.pug',
  styleUrls: ['loading-overlay.component.scss']
})
export class LoadingOverlayComponent implements OnInit {
  public showOverlay = true;
  public transparent = false;

  constructor(
    private $loadingOverlay: LoadingOverlayService,
    private $cdr: ChangeDetectorRef,
  ) {

  }

  public ngOnInit(): void {
    this.$loadingOverlay.onOverlayStateChanged()
      .pipe(debounceTime(200))
      .subscribe((config: LoadingOverlayConfig) => {
          this.showOverlay = config.showOverlay;
          this.transparent = config.transparent;
          this.$cdr.detectChanges();
        },
        (err: Error) => {
          console.error(err.message);
        });

  }

}
