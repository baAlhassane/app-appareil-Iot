import { Component, NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import {FormsModule, ReactiveFormsModule} from '@angular/forms'
import {HttpClientModule} from "@angular/common/http" 

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { AppareilComponent } from './appareil/appareil.component';

import { AppareilService } from './service/appareil.service';
import { AppareilViewComponent } from './appareil-view/appareil-view.component';
import { AuthComponent } from './auth/auth.component';
import {RouterModule, Routes} from "@angular/router";
import { AuthService } from './service/auth.service';
import { SingleAppareilComponent } from './single-appareil/single-appareil.component';
import { NotFoundComponent } from './not-found/not-found.component';
import { AuthGuard } from './service/auth-guard.service';
import { EditAppareilComponent } from './edit-appareil/edit-appareil.component';
import { UserListComponent } from './user-list/user-list.component';
import { UserService } from './service/user.service';
import { NewUserComponent } from './new-user/new-user.component';
import { SignupComponent } from './auth/signup/signup.component';



const appRoutes:Routes=[
  {
    path:"appareils",canActivate:[AuthGuard], component:AppareilViewComponent
  },
  {
    path:"appareils/:id", canActivate:[AuthGuard],component:SingleAppareilComponent
  },

  {
    path:"edit",canActivate:[AuthGuard], component: EditAppareilComponent

  },
  {
    path:"auth",component: AuthComponent

  },
  {
    path:"users",component: UserListComponent

  },
  {
    path:"new-user",component: NewUserComponent

  },
 {
  path:"",component:AppareilViewComponent
 },
 {
  path:"not-found", component:NotFoundComponent
 },
 {
  path:"**", redirectTo:"/not-found"
 }
];

@NgModule({
  declarations: [
    AppComponent,
    AppareilComponent,
    AppareilViewComponent,
    AuthComponent,
    SingleAppareilComponent,
    NotFoundComponent,
    EditAppareilComponent,
    UserListComponent,
    NewUserComponent,
    SignupComponent,
   
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    RouterModule.forRoot(appRoutes),
    ReactiveFormsModule,
    HttpClientModule
  ],
  providers: [ 
    AppareilService,
    AuthService,
    AuthGuard,
    UserService,
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
