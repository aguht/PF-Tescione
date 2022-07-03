import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { InscripcionesEditComponent } from './components/inscripciones-edit/inscripciones-edit.component';
import { InscripcionesFormComponent } from './components/inscripciones-form/inscripciones-form.component';
import { InscripcionesInfoComponent } from './components/inscripciones-info/inscripciones-info.component';
import { InscripcionesListaComponent } from './components/inscripciones-lista/inscripciones-lista.component';



@NgModule({
  declarations: [
    InscripcionesEditComponent,
    InscripcionesFormComponent,
    InscripcionesInfoComponent,
    InscripcionesListaComponent
  ],
  imports: [
    CommonModule
  ]
})
export class InscripcionesModule { }
