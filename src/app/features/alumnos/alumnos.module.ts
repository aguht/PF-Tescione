import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AlumnosEditComponent } from './components/alumnos-edit/alumnos-edit.component';
import { AlumnosFormComponent } from './components/alumnos-form/alumnos-form.component';
import { AlumnosInfoComponent } from './components/alumnos-info/alumnos-info.component';
import { AlumnosListaComponent } from './components/alumnos-lista/alumnos-lista.component';



@NgModule({
  declarations: [
    AlumnosEditComponent,
    AlumnosFormComponent,
    AlumnosInfoComponent,
    AlumnosListaComponent
  ],
  imports: [
    CommonModule
  ]
})
export class AlumnosModule { }
