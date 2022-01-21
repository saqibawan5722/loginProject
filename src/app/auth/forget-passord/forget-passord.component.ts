import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, FormBuilder, Validators, FormArray } from '@angular/forms';
import { Router } from '@angular/router';


@Component({
  selector: 'app-forget-passord',
  templateUrl: './forget-passord.component.html',
  styleUrls: ['./forget-passord.component.css']
})
export class ForgetPassordComponent implements OnInit {

username: any;

contactForm:FormGroup;
constructor(private fb: FormBuilder, private router : Router ){

this.contactForm = fb.group(  
  {
    username: ['',[Validators.required, Validators.pattern("[a-z0-9._%+-]+@[a-z0-9.-]+\.[a-z]{2,}$")]],
    
    
  });

}


 
onSubmit(){
  console.log(this.contactForm);
  this.router.navigateByUrl('/about');

  }


back(){
  this.router.navigateByUrl('/login')
}
  

  ngOnInit(): void {
  }

}
