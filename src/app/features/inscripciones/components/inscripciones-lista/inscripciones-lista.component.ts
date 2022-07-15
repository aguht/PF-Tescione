import { Component, OnInit } from '@angular/core';
import { Store } from '@ngrx/store';
import { Subscription } from 'rxjs';
import { selectAlumnoByIdSuccess } from 'src/app/features/alumnos/store/alumnos-feature.selectors';
import { selectCursoByIdSuccess } from 'src/app/features/cursos/store/cursos-feature.selectors';
import { Inscripciones } from 'src/app/shared/interfaces/inscripciones';
import { deleteInscripcionesFeatures, loadInscripcionesFeatures, loadInscripcionByIdFeatures } from '../../store/inscripciones-feature.actions';
import { selectInscripcionesSuccess } from '../../store/inscripciones-feature.selectors';

@Component({
  selector: 'app-inscripciones-lista',
  templateUrl: './inscripciones-lista.component.html',
  styleUrls: ['./inscripciones-lista.component.scss']
})
export class InscripcionesListaComponent implements OnInit {

  nombreApellido:string;
  displayedColumns=['curso','alumno','usuario','fecha','edit','delete'];
  inscripcioness:any=[];
  subscriptions:Subscription;

  constructor( private store:Store<any>) { }

  ngOnInit(): void {
    this.store.dispatch(loadInscripcionesFeatures());
    this.store.select(selectInscripcionesSuccess).subscribe(
      (val)=>{
        if(val.inscripciones.length>0){
          this.inscripcioness=val.inscripciones;
        }
      }
    )
    
    
  }

  deleteElement(el:any){
    this.store.dispatch(deleteInscripcionesFeatures({id:el.id}))
  }

  getInscripcionDetails(el:any){
    this.store.dispatch(loadInscripcionByIdFeatures({id:el.id}))
  }

  ngOnDestroy(): void {
    if(this.subscriptions){
      this.subscriptions.unsubscribe();
    }
  }
}