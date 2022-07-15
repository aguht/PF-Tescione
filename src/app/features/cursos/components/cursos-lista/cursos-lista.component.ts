import { Component, OnInit } from '@angular/core';
import { Store } from '@ngrx/store';
import { Subscription } from 'rxjs';
import { selectAlumnoByIdSuccess } from 'src/app/features/alumnos/store/alumnos-feature.selectors';
import { loadInscripcionByIdFeatures } from 'src/app/features/inscripciones/store/inscripciones-feature.actions';
import { Inscripciones } from 'src/app/shared/interfaces/inscripciones';
import { deleteCursosFeatures, loadCursoByIdFeatures, loadCursosFeatures } from '../../store/cursos-feature.actions';
import { selectCursosSuccess } from '../../store/cursos-feature.selectors';

@Component({
  selector: 'app-cursos-lista',
  templateUrl: './cursos-lista.component.html',
  styleUrls: ['./cursos-lista.component.scss']
})
export class CursosListaComponent implements OnInit {

  nombreApellido:string;
  displayedColumns=['nombre','profesor','horas','inscripcion','edit','info','delete'];
  cursoss:any=[];
  subscriptions:Subscription;
  curso:any=[];
  alumno:any=[];
  inscripcion:Inscripciones;

  constructor( private store:Store<any>) { }

  ngOnInit(): void {
    this.store.dispatch(loadCursosFeatures());
    this.store.select(selectCursosSuccess).subscribe(
      (val)=>{
        if(val.cursos.length>0){
          this.cursoss=val.cursos;
        }
      }
    )
  }

  deleteElement(el:any){
    this.store.dispatch(deleteCursosFeatures({id:el.id}))
  }

  getCursoDetails(el:any){
    this.store.dispatch(loadCursoByIdFeatures({id:el.id}))
  }

  crearInscripcion(el:any){
    this.store.select(selectAlumnoByIdSuccess).subscribe(
      val=>{this.alumno=val}
    )
    this.alumno.curso=this.curso.nombre;
    this.inscripcion.nombreAlumno=this.alumno.nombre;
    this.inscripcion.nombreCurso=el.nombre;
    this.inscripcion.fecha=Date.now();

    this.store.dispatch(loadInscripcionByIdFeatures(this.inscripcion))
  }

  ngOnDestroy(): void {
    if(this.subscriptions){
      this.subscriptions.unsubscribe();
    }
  }
}
