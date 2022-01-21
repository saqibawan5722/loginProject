import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-template',
  templateUrl: './template.component.html',
  styleUrls: ['./template.component.css']
})
export class TemplateComponent implements OnInit {

 
  constructor() { }

  ngOnInit(): void {
  }
  
  Submit(loginform){
    console.log(loginform.value);
  }
 
  
  /* use for prefill */
 users={
   email:"aqibawan32483",
   name:"hassan"
 }


 /*
 reset(loginform) {
  loginform.resetForm();
}*/
  
}
