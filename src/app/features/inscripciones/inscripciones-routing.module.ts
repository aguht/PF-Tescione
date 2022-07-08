import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { InscripcionesFormComponent } from './components/inscripciones-form/inscripciones-form.component';
import { InscripcionesListaComponent } from './components/inscripciones-lista/inscripciones-lista.component';

const routes: Routes = [
  {path:'',component:InscripcionesListaComponent},
  {path:'form',component:InscripcionesFormComponent}
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class InscripcionesRoutingModule { }
