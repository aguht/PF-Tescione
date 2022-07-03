import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CursosEditComponent } from './components/cursos-edit/cursos-edit.component';
import { CursosFormComponent } from './components/cursos-form/cursos-form.component';
import { CursosInfoComponent } from './components/cursos-info/cursos-info.component';
import { CursosListaComponent } from './components/cursos-lista/cursos-lista.component';



@NgModule({
  declarations: [
    CursosEditComponent,
    CursosFormComponent,
    CursosInfoComponent,
    CursosListaComponent
  ],
  imports: [
    CommonModule
  ]
})
export class CursosModule { }
