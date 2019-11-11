import { Component, OnInit } from '@angular/core';
import { AppComponent } from '../app.component';
import { Router } from '@angular/router';

@Component({
  selector: 'app-mobile-display',
  templateUrl: './mobile-display.component.html',
  styleUrls: ['./mobile-display.component.css']
})
export class MobileDisplayComponent implements OnInit {

  constructor(public app: AppComponent, private router: Router) { }

  ngOnInit() {
  }

  buyPhone(index: number) {
    if(this.app.mobiles[index].quantity == 1)
      this.app.mobiles.splice(index,1);
    else
    this.app.mobiles[index].quantity--;
  }

  deletePhone(index: number) {
    this.app.mobiles.splice(index,1);
  }

  addPhone() {
    this.router.navigate(['/mobileentry']);
  }
}
