import { NgModule } from '@angular/core'
import { CommonModule } from '@angular/common'

import { ReportsRoutingModule } from './reports-routing.module'
import { ReportsComponent } from './reports.component'
import { MatCardModule } from '@angular/material/card'
import { MatButtonModule } from '@angular/material';
@NgModule({
  declarations: [ReportsComponent],
  imports: [CommonModule, ReportsRoutingModule, MatCardModule, MatButtonModule]
})
export class ReportsModule {}
