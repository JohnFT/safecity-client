import { NgModule } from '@angular/core'
import { CommonModule } from '@angular/common'

import { LayoutRoutingModule } from './layout-routing.module'
import { LayoutComponent } from './layout.component'
import { MatToolbarModule } from '@angular/material/toolbar'
import {
  MatIconModule,
  MatButtonModule,
  MatSidenavModule,
  MatFormFieldModule,
  MatInputModule,

} from '@angular/material'


@NgModule({
  declarations: [LayoutComponent],
  imports: [
    CommonModule,
    LayoutRoutingModule,
    MatToolbarModule,
    MatIconModule,
    MatButtonModule,
    MatSidenavModule,
    MatInputModule,
    MatFormFieldModule
  ]
})
export class LayoutModule {}
