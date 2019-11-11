import { Component, OnInit } from '@angular/core';
import { AppComponent } from '../app.component';

@Component({
  selector: 'app-mobile-entry',
  templateUrl: './mobile-entry.component.html',
  styleUrls: ['./mobile-entry.component.css']
})
export class MobileEntryComponent implements OnInit {

  constructor(public app: AppComponent) { }
  cname: string;
  mnumber: string;
  qty: number;

  cname2: string;
  mnumber2: string;
  qty2: number;
  i: number;

  ngOnInit() {
  }

  submitPhone(e: any) {
    this.app.mobiles.push({
      "name": this.cname,
      "modelnumber": this.mnumber,
      "quantity": this.qty
    });
    e.target.reset();
  }

  updatePhone(e: any){
    this.app.mobiles[this.i].quantity += this.qty2;
    e.target.reset();
  }

  searchPhone() {
    let phone = this.app.mobiles.find((ele) => {
      return ele.modelnumber == this.mnumber2;
    });
    if(phone) {
      this.i = this.app.mobiles.indexOf(phone);
      this.cname2 = phone.name;
      this.qty2 = phone.quantity;
    }
  }

}
