import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { MobileDisplayComponent } from './mobile-display/mobile-display.component';
import { MobileEntryComponent } from './mobile-entry/mobile-entry.component';

@NgModule({
  declarations: [
    AppComponent,
    MobileDisplayComponent,
    MobileEntryComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
