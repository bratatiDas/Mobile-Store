import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { MobileDisplayComponent } from './mobile-display/mobile-display.component';
import { MobileEntryComponent } from './mobile-entry/mobile-entry.component';


const routes: Routes = [
  { path: '', redirectTo: 'mobiledisplay', pathMatch: 'full' },
  { path: 'mobiledisplay', component: MobileDisplayComponent },
  { path: 'mobileentry', component: MobileEntryComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
