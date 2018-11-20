import { NgModule } from '@angular/core';
import { APP_DECLARATIONS } from './app.declarations';
import { AppComponent } from './app.component';
import { APP_PROVIDERS } from './app.providers';
import { APP_IMPORTS, APP_EXPORTS } from './app.imports';
import { AppRoutingModule } from './app-routing.module';

@NgModule({
  declarations: [
    APP_DECLARATIONS,
  ],
  entryComponents: [
  ],
  exports: [
    APP_EXPORTS
  ],
  imports: [
    AppRoutingModule,
    APP_IMPORTS
  ],
  providers: [
    APP_PROVIDERS
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
