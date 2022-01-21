import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-directive',
  templateUrl: './directive.component.html',
  styleUrls: ['./directive.component.css']
})
export class DirectiveComponent implements OnInit {

   //@Input() name:any
  
  constructor() { }

 // @Output() additem: EventEmitter<string> = new EventEmitter();
 

  ngOnInit(): void {
   // this.additem.emit()
   
  }

  /* use for example 2 for child to parent
   fireEvent(){
      this.childEvent.emit("hello how are u");
    }
  */


/* use of pipe 
  value="saqib ali";
  toDate= new Date()
*/


  /* use mg model
value="";
 clearValue() {
   this.value="";
 }
 */


  /*
   // use of ngif
  books = [1,2,3]
*/




  /*
  // use for nffor
  data = [
    { id:4 , name:"Akbar" , email:"akbar5476" },
    { id:2 ,  name:"ali",  email:"ali5476" },
    { id:3 ,  name:"awan",  email:"hassan5476" },
    { id:4 ,  name:"hassan",  email:"aqib5476" },
  
  ]*/




// use for nested array
/*
  employees = [
    {
      name: "saqi", email: "aksdhsh",
      skills: [{ skill: 'Angular', exp: '2' },{ skill: 'Javascript', exp: '7' },{ skill: 'TypeScript', exp: '3' }
      ]
    },
    {
      name: "aqib", email: "sdfjdsjlhf",
      skills: [{ skill: 'Angular', exp: '1' },{ skill: 'Android', exp: '3' },{ skill: 'React', exp: '2' }
      ]
    },
    {
      name: "hassan", email: "saqibali34",
      skills: [{ skill: 'HTML', exp: '2' },{ skill: 'CSS', exp: '2' },{ skill: 'Javascript', exp: '1' }
      ]
    }
  ]
*/




/* using trackby 

data = [
  { id:4 , name:"Akbar" , email:"akbar5476" },
  { id:2 ,  name:"ali",  email:"ali5476" },
  { id:3 ,  name:"awan",  email:"hassan5476" },
  { id:4 ,  name:"hassan",  email:"aqib5476" },

]

refresh(): any{
  this.data = [
    { id:4 , name:"Akbar" , email:"akbar5476" },
    { id:2 ,  name:"ali",  email:"ali5476" },
    { id:3 ,  name:"awan",  email:"hassan5476" },
    { id:4 ,  name:"hassan",  email:"aqib5476" },
    { id:5 ,  name:"hassain",  email:"aqib5476" },
  
  ]
}

*/


/* use of switch 

public choose="";
setvalue(drp:any){
  this.choose= drp.target.value
}

*/




}





