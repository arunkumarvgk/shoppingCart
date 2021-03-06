import { NgModule } from "@angular/core";
import { CommonModule } from "@angular/common";
import { FormsModule, ReactiveFormsModule } from "@angular/forms";
import { MaterialModule } from "@angular/material";

import { UserRoutingModule } from "./user-routing.module";
import { LoginComponent } from "./login/login.component";
import { RegisterUserComponent } from "./login/register/register-user/register-user.component";
import { ProfileComponent } from './profile/profile.component';

@NgModule({
  imports: [
    CommonModule,
    UserRoutingModule,
    FormsModule,
    ReactiveFormsModule,
    MaterialModule
  ],
  declarations: [
    LoginComponent, 
    RegisterUserComponent,
    ProfileComponent
    ]
})
export class UserModule { }
