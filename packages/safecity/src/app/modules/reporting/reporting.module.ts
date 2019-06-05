import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ReportingRoutingModule } from './reporting-routing.module';
import { MatButtonModule, MatInputModule, MatFormFieldModule } from '@angular/material';
import { ReportingComponent } from './reporting.component';

@NgModule({
  declarations: [ReportingComponent],
  imports: [
    CommonModule,
    ReportingRoutingModule,
    MatButtonModule,
    MatInputModule,
    MatFormFieldModule
  ]
})
export class ReportingModule { }
