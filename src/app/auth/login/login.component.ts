import { ThisReceiver } from '@angular/compiler';
import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, FormBuilder, Validators, FormArray } from '@angular/forms';
import { Router } from '@angular/router';
import { Observable } from 'rxjs';
@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit  {
// use custom validation
// notallow=["saqibali@gamil.com"]  

  username: any;
  password: any;


/* this is use for moving page
  contactForm:FormGroup;
constructor(private fb: Router){}


onSubmit() {
  this.fb.navigateByUrl('/about');
}; */




/* use simple GroupForm 

contactForm = new FormGroup(  
{
  username: new FormControl(''),
  password: new FormControl(''),
 
});

onSubmit(log){
  var email = log.username;
  var pass = log.password;
  console.log(email+","+pass);
  }
*/



/*@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@*/


/* Use builder in reactive group 

contactForm:FormGroup;
constructor(private fb: FormBuilder){

this.contactForm = fb.group(  
  {
  username: new FormControl(''),
  password: new FormControl(''),
   
  });

}
onSubmit(){
  console.log(this.contactForm.value);
  }
 */ 




/* @@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@ */

/* use builder and validation */ 

contactForm:FormGroup;
constructor(private fb: FormBuilder, private router : Router ){

this.contactForm = fb.group(  
  {
    username: ['',[Validators.required, Validators.pattern("[a-z0-9._%+-]+@[a-z0-9.-]+\.[a-z]{2,}$")/*this.NaN.bind(this)*/]],
    password: ['',[Validators.required, Validators.maxLength(7)],/*this.Napass*/],
    
  });

}


 
onSubmit(){
  console.log(this.contactForm);
  this.router.navigateByUrl('/main');

  }



  onForgetPassword(){
    this.router.navigateByUrl('/forget-passord')
  }


/* use get value 
get(){
   var a =this.contactForm.get('username').value;
   var a =this.contactForm.get('password').value;
   console.log(a)
}


 use for set value 
set(){
  this.contactForm.setValue({
    'username':"hassan@gmail.com",
    'password':"345435"
  })
}



 use for patch value 
 patch(){
  this.contactForm.patchValue({
    'username':"hassan@gmail.com",
   
  }) 
}


 use for reset
reset(){
  this.contactForm.reset() 
}
*/

/* @@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@ */

/* this is use for custom validation

NaN(control:FormControl){
  if(this.notallow.indexOf(control.value)!==-1){
    return{"name is not allow":true}
  }
  return null;

} */




/* this is use for custom async validation

Napass(control:FormControl): Promise<any> | Observable<any>
{
   const myrespose = new Promise<any>((resolve, rejects)=>{
     setTimeout(()=>{
       if(control.value=="148645"){
         resolve({"password not allow": true})
       }else{
         resolve(null)
       }
     }, 6000);
   })
   return myrespose;
  }
 */




 ngOnInit(): void { 

  /* @@@@@@@@@@@@@@@ valuechange @@@@@@@@@@@@@@@@@@ */
  /*  this usi for value change ya jis ki cheay gay value change kray ga (also called controlform)

  this.contactForm.get('username').valueChanges.subscribe(
    data=>{
      console.log(data)
    });

    this.contactForm.get('password').valueChanges.subscribe(
      data=>{
        console.log(data)
      });

  */
 
  
  /* ya puray groupform main say value change kray ga

      this.contactForm.valueChanges.subscribe((data:LoginComponent)=>{
         
        console.log(data.username);
        console.log(data.password);

      });
    */



  /* @@@@@@@@@@@@@@@ status change @@@@@@@@@@@@@@@@@@ */
  /* this is use for status change 
      this.contactForm.get('username').statusChanges.subscribe(
        data=>{
          console.log(data)
        });
    */


  /* @@@@@@@@@@@@ use form array @@@@@@@@@@@
  const arr = new FormArray([
    new FormControl("saqib"),
    new FormControl("23123")
  ])
  //  arr.setValue(["saqib2", "123213"])
    console.log(arr.value)*/



    }
    
    
}






