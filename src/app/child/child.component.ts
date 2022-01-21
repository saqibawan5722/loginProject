import { Component, OnInit } from '@angular/core';
import { MyserviceService } from '../myservice.service';

@Component({
  selector: 'app-child',
  templateUrl: './child.component.html',
  styleUrls: ['./child.component.css'],
 // providers: [MyserviceService],
})
export class ChildComponent implements OnInit {

  constructor(private _text:MyserviceService) { }
   product:any=[];
  ngOnInit(): void {
    // this.product = this._text.product;
  }
 
  btnmessage(){
  //  this._text.messageAlert();
  }
}
