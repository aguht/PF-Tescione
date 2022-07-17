import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Store } from '@ngrx/store';
import { AuthService } from 'src/app/shared/services/auth.service';
import { cerrarSesion } from 'src/app/features/login/store/login-feature.actions';
import { selectorUsuarioActivo } from 'src/app/features/login/store/login-feature.selectors';
import { Usuarios } from 'src/app/shared/interfaces/usuarios';


@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.scss']
})
export class NavbarComponent implements OnInit {

  usuarioActivo: Usuarios;

  constructor(public authService:AuthService, private store:Store, private router:Router) { }

  ngOnInit(): void {
    var values = JSON.parse(localStorage.getItem('session') || 'false');
    this.store.select(selectorUsuarioActivo).subscribe((data) => {
      if (values.usuario !== undefined) {
        this.usuarioActivo = values.usuario;
      } else {
        this.usuarioActivo = data.usuarioActivo;
      }
    });
  }

  cerrarSesion() {
    this.authService.CerrarSesion();
    this.store.dispatch(cerrarSesion());
    this.router.navigate(['login']);
  }

}
