import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AboutComponent } from './about/about.component';
import { LoginComponent } from './auth/login/login.component';
import { ForgetPassordComponent } from './auth/forget-passord/forget-passord.component';
import { MainComponent } from './main/main.component';

const routes: Routes = [
   { path:'' , redirectTo: 'login', pathMatch: 'full' },
   { path:'login' , component:LoginComponent },
   { path:'about' , component:AboutComponent },
   { path:'forget-passord', component:ForgetPassordComponent},
   { path:'main', component:MainComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
