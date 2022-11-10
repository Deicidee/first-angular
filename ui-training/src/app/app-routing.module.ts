import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AreaCalcComponent } from './area-calc/area-calc.component';
import { PermiterCalcComponent } from './permiter-calc/permiter-calc.component';
import { PrimeNumbCalcComponent } from './prime-numb-calc/prime-numb-calc.component';
import { ReactiveFormsModule } from '@angular/forms';

const routes: Routes = [
  { path: 'area', component: AreaCalcComponent },
  { path: 'permit', component: PermiterCalcComponent },
  { path: 'prime', component: PrimeNumbCalcComponent }
];

@NgModule({
  imports: [
    RouterModule.forRoot(routes),
    ReactiveFormsModule
  ],
  exports: [RouterModule]
})
export class AppRoutingModule { }
