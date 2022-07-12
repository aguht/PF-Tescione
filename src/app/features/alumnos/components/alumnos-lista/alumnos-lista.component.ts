import { Component, OnInit } from '@angular/core';
import { disableDebugTools } from '@angular/platform-browser';
import { Store } from '@ngrx/store';
import { Subscription } from 'rxjs';
import { AlumnosService } from 'src/app/shared/services/alumnos.service';
import { deleteAlumnosFeatures, loadAlumnosFeatures, loadElementByIdFeatures } from '../../store/alumnos-feature.actions';
import { selectAlumnosSuccess, selectElementByIdSuccess } from '../../store/alumnos-feature.selectors';

@Component({
  selector: 'app-alumnos-lista',
  templateUrl: './alumnos-lista.component.html',
  styleUrls: ['./alumnos-lista.component.scss']
})
export class AlumnosListaComponent implements OnInit {

  nombreApellido:string;
  displayedColumns=['alumno','mail','telefono','dni','edit','info','delete'];
  alumnoss:any=[];
  subscriptions:Subscription;

  constructor(private alumnosService:AlumnosService, private store:Store<any>) { }

  ngOnInit(): void {
    this.store.dispatch(loadAlumnosFeatures());
    this.store.select(selectAlumnosSuccess).subscribe(
      (val)=>{
        if(val.alumnos.length>0){
          this.alumnoss=val.alumnos;
        }
      }
   )
   /*this.store.select(selectElementByIdSuccess).subscribe(
    val=>{console.log(val)}
    )  */
  }


  deleteElement(el:any){
    this.store.dispatch(deleteAlumnosFeatures({id:el.id}))
  }

  getAlumnoDetails(el:any){
    this.store.dispatch(loadElementByIdFeatures({id:el.id}))
  }

  ngOnDestroy(): void {
    if(this.subscriptions){
      this.subscriptions.unsubscribe();
    }
  }
}
