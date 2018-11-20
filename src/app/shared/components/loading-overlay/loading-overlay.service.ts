import { Injectable } from '@angular/core';
import { Subject, Observable } from 'rxjs';
import { share } from 'rxjs/operators';
import { LoadingOverlayConfig } from './loading-overlay.config';

@Injectable()
export class LoadingOverlayService {

  private _showOverlay = false;
  private onOverlayStateChangedSource: Subject <LoadingOverlayConfig> = new Subject <LoadingOverlayConfig> ();

  constructor() {}

  public showOverlay(transparent?: boolean): void {
    this._showOverlay = true;
    this.onOverlayStateChangedSource.next({
      showOverlay: true,
      transparent: transparent
    });
  }

  public hideOverlay(): void {
    this._showOverlay = false;
    this.onOverlayStateChangedSource.next({
      showOverlay: false,
      transparent: false
    });
  }

  public onOverlayStateChanged(): Observable <LoadingOverlayConfig> {
    return this.onOverlayStateChangedSource.asObservable().pipe(share());
  }

}
