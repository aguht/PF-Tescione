import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AppComponent } from './app.component';
import { FrontComponent } from './core/front/front.component';
import { NoPageFoundComponent } from './core/no-page-found/no-page-found.component';
import { AlumnosModule } from './features/alumnos/alumnos.module';
import { CursosModule } from './features/cursos/cursos.module';
import { InscripcionesModule } from './features/inscripciones/inscripciones.module';
import { LoginModule } from './features/login/login.module';
import { UsuariosModule } from './features/usuarios/usuarios.module';

const routes: Routes = [
  {path:'alumnos', loadChildren:()=>import('./features/alumnos/alumnos.module').then(m=>AlumnosModule)},
  {path:'cursos', loadChildren:()=>import('./features/cursos/cursos.module').then(m=>CursosModule)},
  {path:'inscripciones', loadChildren:()=>import('./features/inscripciones/inscripciones.module').then(m=>InscripcionesModule)},
  {path:'login', loadChildren:()=>import('./features/login/login.module').then(m=>LoginModule)},
  {path:'usuarios', loadChildren:()=>import('./features/usuarios/usuarios.module').then(m=>UsuariosModule)},
  {path:'', component: FrontComponent, pathMatch:'full'},
  {path:'**', component: NoPageFoundComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
