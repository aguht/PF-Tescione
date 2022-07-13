import { Component, OnInit } from '@angular/core';
import { Store } from '@ngrx/store';
import { Subscription } from 'rxjs';
import { deleteCursosFeatures, loadCursosFeatures, loadElementByIdFeatures } from '../../store/cursos-feature.actions';
import { selectCursosSuccess } from '../../store/cursos-feature.selectors';

@Component({
  selector: 'app-cursos-lista',
  templateUrl: './cursos-lista.component.html',
  styleUrls: ['./cursos-lista.component.scss']
})
export class CursosListaComponent implements OnInit {

  nombreApellido:string;
  displayedColumns=['nombre','profesor','horas','edit','info','delete'];
  cursoss:any=[];
  subscriptions:Subscription;

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
    this.store.dispatch(loadElementByIdFeatures({id:el.id}))
  }

  ngOnDestroy(): void {
    if(this.subscriptions){
      this.subscriptions.unsubscribe();
    }
  }
}
