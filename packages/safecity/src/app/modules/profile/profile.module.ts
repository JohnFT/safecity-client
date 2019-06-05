import { NgModule } from '@angular/core'
import { CommonModule } from '@angular/common'

import { ProfileRoutingModule } from './profile-routing.module'
import { ProfileComponent } from './profile.component'
import { MatButtonModule, MatFormFieldModule, MatInputModule } from '@angular/material';

@NgModule({
  declarations: [ProfileComponent],
  imports: [
    CommonModule,
    ProfileRoutingModule,
    MatButtonModule,
    MatInputModule,
    MatFormFieldModule
  ]
})
export class ProfileModule {}
