import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { UsuariosEditComponent } from './components/usuarios-edit/usuarios-edit.component';
import { UsuariosFormComponent } from './components/usuarios-form/usuarios-form.component';
import { UsuariosInfoComponent } from './components/usuarios-info/usuarios-info.component';
import { UsuariosListaComponent } from './components/usuarios-lista/usuarios-lista.component';
import { RouterModule } from '@angular/router';
import { UsuariosRoutingModule } from './usuarios-routing.module';



@NgModule({
  declarations: [
    UsuariosEditComponent,
    UsuariosFormComponent,
    UsuariosInfoComponent,
    UsuariosListaComponent
  ],
  imports: [
    CommonModule,
    RouterModule,
    UsuariosRoutingModule
  ]
})
export class UsuariosModule { }
