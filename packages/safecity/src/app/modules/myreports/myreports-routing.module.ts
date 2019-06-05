import { NgModule } from '@angular/core'
import { Routes, RouterModule } from '@angular/router'
import { MyreportsComponent } from './myreports.component'

const routes: Routes = [{ path: '', component: MyreportsComponent }]

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class MyreportsRoutingModule {}
