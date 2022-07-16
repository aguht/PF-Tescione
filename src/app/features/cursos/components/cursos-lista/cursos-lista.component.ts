import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Store } from '@ngrx/store';
import { Subscription } from 'rxjs';
import { updateAlumnosFeatures } from 'src/app/features/alumnos/store/alumnos-feature.actions';
import { selectAlumnoByIdSuccess } from 'src/app/features/alumnos/store/alumnos-feature.selectors';
import { loadInscripcionByIdFeatures, postInscripcionesFeatures } from 'src/app/features/inscripciones/store/inscripciones-feature.actions';
import { Alumnos } from 'src/app/shared/interfaces/alumnos';
import { deleteCursosFeatures, loadCursoByIdFeatures, loadCursosFeatures } from '../../store/cursos-feature.actions';
import { selectCursoByIdSuccess, selectCursosSuccess } from '../../store/cursos-feature.selectors';

@Component({
  selector: 'app-cursos-lista',
  templateUrl: './cursos-lista.component.html',
  styleUrls: ['./cursos-lista.component.scss']
})
export class CursosListaComponent implements OnInit {

  displayedColumns=['nombre','profesor','horas','inscripcion','edit','info','delete'];
  cursoss:any=[];
  subscriptions:Subscription;
  alumnos:any=[];
  inscripcion:any={};

  constructor(private store:Store<any>, private router:Router) { }

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
    //debugger;
    // this.store.select(selectAlumnoByIdSuccess).subscribe(
    //   val=>{debugger
    //     this.alumno=val}
    // )
    this.alumnos.curso=el.nombre;
    debugger
    //this.alumno.curso=el.nombre;
    this.inscripcion.nombreAlumno=this.alumnos.nombre;
    this.inscripcion.nombreCurso=el.nombre;
    this.inscripcion.fecha=Date.now();
    //debugger;
    this.store.dispatch(postInscripcionesFeatures({inscripciones:this.inscripcion}));
    this.store.dispatch(updateAlumnosFeatures(this.alumnos));
    this.router.navigate(['/inscripciones']);
  }

  ngOnDestroy(): void {
    if(this.subscriptions){
      this.subscriptions.unsubscribe();
    }
  }
}
