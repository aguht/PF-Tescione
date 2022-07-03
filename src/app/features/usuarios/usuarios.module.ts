import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ListaUsuariosComponent } from './components/lista-usuarios/lista-usuarios.component';
import { FormUsuariosComponent } from './components/form-usuarios/form-usuarios.component';
import { EditUsuariosComponent } from './components/edit-usuarios/edit-usuarios.component';
import { InfoUsuariosComponent } from './components/info-usuarios/info-usuarios.component';



@NgModule({
  declarations: [
    ListaUsuariosComponent,
    FormUsuariosComponent,
    EditUsuariosComponent,
    InfoUsuariosComponent
  ],
  imports: [
    CommonModule
  ]
})
export class UsuariosModule { }
