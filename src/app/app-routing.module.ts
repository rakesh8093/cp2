import { CpverifyComponent } from './cpverify/cpverify.component';
import { CpComponent } from './cp/cp.component';
import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { AddcustomerComponent } from './addcustomer/addcustomer.component';


const routes: Routes = [
  {path: '' , component: CpComponent},
  {path: 'addcustomer' , component: AddcustomerComponent},
  {path: 'cp' , component: CpComponent},
  {path: 'verify' , component: CpverifyComponent},
];



@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
