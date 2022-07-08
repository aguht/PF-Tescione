import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { UsuariosFormComponent } from './components/usuarios-form/usuarios-form.component';
import { UsuariosInfoComponent } from './components/usuarios-info/usuarios-info.component';
import { UsuariosListaComponent } from './components/usuarios-lista/usuarios-lista.component';

const routes: Routes = [
  {path:'',component:UsuariosListaComponent},
  {path:'form',component:UsuariosFormComponent},
  {path:'info',component:UsuariosInfoComponent}
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class UsuariosRoutingModule { }
