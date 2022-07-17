import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Router } from '@angular/router';
import { BehaviorSubject, map, Observable, tap } from 'rxjs';
import { environment } from 'src/environments/environment';
import { Usuarios } from '../interfaces/usuarios';

@Injectable({
  providedIn: 'root',
})
export class AuthService {
  sesion: any = {
    activa: false,
    usuario: {},
  };
  
  url= 'https://62c7460574e1381c0a74d0a5.mockapi.io/usuarios';
  rol: any;

  isAuthenticatedSrc: BehaviorSubject<boolean> = new BehaviorSubject<boolean>(
    JSON.parse(localStorage.getItem('session') || 'false')
  );

  get isAuthenticated(): Observable<boolean> {
    return this.isAuthenticatedSrc.asObservable();
  }

  get isAdmin(): Observable<boolean> {
    return this.rol;
  }

  constructor(private http: HttpClient, private ruta: Router) {
    var values = JSON.parse(localStorage.getItem('session') || 'false');
    if (values.user !== undefined) {
      if (values.user.rol === 1) {
        this.rol = true;
      } else {
        this.rol = false;
      }
    } else {
      this.rol = false;
    }
  }
  IniciarSesion(user: string, pass: string): Observable<Usuarios> {
    return this.http
      .get<Usuarios[]>(this.url)
      .pipe(
        map((usuarios: Usuarios[]) => {
          return usuarios.filter(
            (u) => u.user === user && u.pass === pass
          )[0];
        })
      )
      .pipe(
        tap((res: any) => {
          if (res) {
            this.isAuthenticatedSrc.next(true);
            if (res.rol == 1) {
              this.rol = true;
            } else {
              this.rol = false;
            }
          }
        })
      );
  }
  CerrarSesion(): void {
    this.sesion = {
      activa: false,
      usuario: {},
    };
    localStorage.removeItem('session');
    this.ruta.navigate(['login']);
    this.isAuthenticatedSrc.next(false);
  }

  establecerSesion(sesionActiva: boolean, user: Usuarios) {
    this.sesion = {
      activa: sesionActiva,
      usuario: user,
    };
    localStorage.setItem('session', JSON.stringify(this.sesion));
    this.ruta.navigate(['/alumnos']);
  }
}
