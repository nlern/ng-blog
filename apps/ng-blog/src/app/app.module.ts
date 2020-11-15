import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpClientModule } from '@angular/common/http';
import { UiModule } from '@myorg/ui';

import { AppComponent } from './app.component';
import { AboutComponent } from './containers/about/about.component';

@NgModule({
  declarations: [AppComponent, AboutComponent],
  imports: [BrowserModule, HttpClientModule, UiModule],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
