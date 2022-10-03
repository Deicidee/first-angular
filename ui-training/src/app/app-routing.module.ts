import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AreaCalcComponent } from './area-calc/area-calc.component';
import { ComponentChangerComponent } from './component-changer/component-changer.component';

const routes: Routes = [
  { path: 'kutya', component: AreaCalcComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
