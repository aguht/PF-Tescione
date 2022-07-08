import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CursosEditComponent } from './components/cursos-edit/cursos-edit.component';
import { CursosFormComponent } from './components/cursos-form/cursos-form.component';
import { CursosInfoComponent } from './components/cursos-info/cursos-info.component';
import { CursosListaComponent } from './components/cursos-lista/cursos-lista.component';
import { RouterModule } from '@angular/router';
import { CursosRoutingModule } from './cursos-routing.module';



@NgModule({
  declarations: [
    CursosEditComponent,
    CursosFormComponent,
    CursosInfoComponent,
    CursosListaComponent
  ],
  imports: [
    CommonModule,
    RouterModule,
    CursosRoutingModule
  ]
})
export class CursosModule { }
