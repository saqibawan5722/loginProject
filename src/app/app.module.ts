import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ReactiveFormsModule } from '@angular/forms';
import { DirectiveComponent } from './directive/directive.component';
import { ChildComponent } from './child/child.component';

import { Child1Component } from './child1/child1.component';
import { MyserviceService } from './myservice.service';
import { TemplateComponent } from './template/template.component';
import { LoginComponent } from './auth/login/login.component';
import { RouterModule, Routes } from '@angular/router';
import { AboutComponent } from './about/about.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MatModule } from './mat/mat.module';
import { ForgetPassordComponent } from './auth/forget-passord/forget-passord.component';
import { MainComponent } from './main/main.component';


const routes: Routes = [];


@NgModule({
  declarations: [
    AppComponent,
    DirectiveComponent,
    ChildComponent,
    Child1Component,
    TemplateComponent,
    LoginComponent,
    AboutComponent,
    ForgetPassordComponent,
    MainComponent,
   
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    ReactiveFormsModule,
    FormsModule,
    BrowserAnimationsModule,
    MatModule
   
    
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
