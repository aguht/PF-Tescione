import { Component, OnInit } from '@angular/core';
import { Store } from '@ngrx/store';
import { AlumnosService } from 'src/app/shared/services/alumnos.service';
import { loadAlumnosFeatures } from '../../store/alumnos-feature.actions';
import { selectAlumnosSuccess, selectElementByIdSuccess } from '../../store/alumnos-feature.selectors';

/*@Component({
  selector: 'app-alumnos-lista',
  templateUrl: './alumnos-lista.component.html',
  styleUrls: ['./alumnos-lista.component.scss']
})
export class AlumnosListaComponent implements OnInit {

  nombreApellido:string;
  displayedColumns=['alumno','mail','telefono','id','edit','info','delete'];
  alumnoss:any=[];

  constructor(private alumnosService:AlumnosService, private sotre:Store<any>) { }

  ngOnInit(): void {
    this.sotre.dispatch(loadAlumnosFeatures());
    this.sotre.select(selectAlumnosSuccess).subscribe(
      val=>{
        if(val.alumnos.length>0){
          this.alumnoss=val.alumnos
        }
      }
   )
   /*this.sotre.select(selectElementByIdSuccess).subscribe(
    val=>{
      console.log(val)
    }
   )*/
   
    /* this.store.select(selectProductsSuccess).subscribe(
      val=>{
        if(val.products.length>0){
          this.productos=val.products
        }
      }
    )
    this.store.select(selectElementByIdSuccess).subscribe(
      val=>{
        console.log(val)
      }
    )
  }

}*/


@Component({
  selector: 'app-alumnos-lista',
  templateUrl: './alumnos-lista.component.html',
  styleUrls: ['./alumnos-lista.component.scss']
})
export class AlumnosListaComponent implements OnInit {

  constructor(private store:Store) { }

  alumnoss:any=[];
  nombreApellido:string;
  displayedColumns=['alumno','mail','telefono','id','edit','info','delete'];

  ngOnInit(): void {
    this.store.dispatch(loadAlumnosFeatures());
    this.store.select(selectAlumnosSuccess).subscribe(
      val=>{
        if(val.alumnos.length>0){
          this.alumnoss=val.alumnos
        }
      }
   )
  }

}