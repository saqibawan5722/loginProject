import { Component, OnInit } from '@angular/core';
import { MyserviceService } from '../myservice.service';

@Component({
  selector: 'app-child1',
  templateUrl: './child1.component.html',
  styleUrls: ['./child1.component.css']
})
export class Child1Component implements OnInit {

  constructor(private _message: MyserviceService) { }
  product=[];
  ngOnInit(): void {
    // this.product = this._message.product;
  }

  showMessage(){
  //  this._message.messageAlert();
  }

}
