import { Component, OnInit } from '@angular/core';
import { Store } from '@ngrx/store';
import { Subscription } from 'rxjs';
import { selectElementByIdSuccess } from '../../store/inscripciones-feature.selectors';

@Component({
  selector: 'app-inscripciones-info',
  templateUrl: './inscripciones-info.component.html',
  styleUrls: ['./inscripciones-info.component.scss']
})
export class InscripcionesInfoComponent implements OnInit {

  inscripcion:any=[];
  subscriptions:Subscription;
  
  constructor(private store:Store) { }

  ngOnInit(): void {
    
    this.store.select(selectElementByIdSuccess).subscribe(
      val=>{this.inscripcion=val}
    )
  }

  ngOnDestroy(): void {
    if(this.subscriptions){
      this.subscriptions.unsubscribe();
    }
  }
}