import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AlumnosFormComponent } from './components/alumnos-form/alumnos-form.component';
import { AlumnosInfoComponent } from './components/alumnos-info/alumnos-info.component';
import { AlumnosListaComponent } from './components/alumnos-lista/alumnos-lista.component';

const routes: Routes = [
  {path:'',component:AlumnosListaComponent},
  {path:'form',component:AlumnosFormComponent},
  {path:'info',component:AlumnosInfoComponent}
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class AlumnosRoutingModule { }
