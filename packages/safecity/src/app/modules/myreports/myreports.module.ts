import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { MyreportsRoutingModule } from './myreports-routing.module';
import { MyreportsComponent } from './myreports.component';
import { MatButtonModule, MatCardModule } from '@angular/material';

@NgModule({
  declarations: [MyreportsComponent],
  imports: [
    CommonModule,
    MyreportsRoutingModule,
    MatCardModule, MatButtonModule
  ]
})
export class MyreportsModule { }
