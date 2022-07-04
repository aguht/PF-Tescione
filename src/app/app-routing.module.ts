import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { FrontComponent } from './core/front/front.component';
import { NoPageFoundComponent } from './core/no-page-found/no-page-found.component';

const routes: Routes = [
  {path:'', component: FrontComponent, pathMatch:'full'},
  {path:'**', component: NoPageFoundComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
