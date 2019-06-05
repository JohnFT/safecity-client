import { NgModule } from '@angular/core'
import { Routes, RouterModule } from '@angular/router'
import { LayoutComponent } from './layout.component'

const childrens: Routes = [
  {
    path: 'reporting',
    loadChildren: '../reporting/reporting.module#ReportingModule'
  },
  {
    path: 'reports',
    loadChildren: '../reports/reports.module#ReportsModule'
  }
  ,
  {
    path: 'myreports',
    loadChildren: '../myreports/myreports.module#MyreportsModule'
  },
  {
    path: 'account',
    loadChildren: '../profile/profile.module#ProfileModule'
  }
]
const routes: Routes = [
  { path: '', component: LayoutComponent, children: childrens }
]

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class LayoutRoutingModule {}
