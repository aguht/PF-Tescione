import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { InscripcionesEditComponent } from './components/inscripciones-edit/inscripciones-edit.component';
import { InscripcionesFormComponent } from './components/inscripciones-form/inscripciones-form.component';
import { InscripcionesInfoComponent } from './components/inscripciones-info/inscripciones-info.component';
import { InscripcionesListaComponent } from './components/inscripciones-lista/inscripciones-lista.component';

const routes: Routes = [
  {path:'',component:InscripcionesListaComponent},
  {path:'form',component:InscripcionesFormComponent},
  {path:'info',component:InscripcionesInfoComponent},
  {path:'edit',component:InscripcionesEditComponent}
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class InscripcionesRoutingModule { }
