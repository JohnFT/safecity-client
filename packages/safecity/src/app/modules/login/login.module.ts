import { NgModule } from '@angular/core'
import { CommonModule } from '@angular/common'

import { LoginRoutingModule } from './login-routing.module'
import { LoginComponent } from './login.component'

import {
  MatButtonModule,
  MatFormFieldModule,
  MatInputModule
} from '@angular/material'

@NgModule({
  declarations: [LoginComponent],
  imports: [
    CommonModule,
    LoginRoutingModule,
    MatButtonModule,
    MatFormFieldModule,
    MatInputModule
  ]
})
export class LoginModule {}
