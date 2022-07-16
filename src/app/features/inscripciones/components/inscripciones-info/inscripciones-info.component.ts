import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Store } from '@ngrx/store';
import { Subscription } from 'rxjs';
import { selectInscripcionByIdSuccess } from '../../store/inscripciones-feature.selectors';

@Component({
  selector: 'app-inscripciones-info',
  templateUrl: './inscripciones-info.component.html',
  styleUrls: ['./inscripciones-info.component.scss']
})
export class InscripcionesInfoComponent implements OnInit {

  inscripcion:any=[];
  subscriptions:Subscription;
  
  constructor(private store:Store, private router:Router) { }

  ngOnInit(): void {
    
    this.store.select(selectInscripcionByIdSuccess).subscribe(
      val=>{this.inscripcion=val}
    )
    this.router.navigate(['/inscripciones']);
  }

  ngOnDestroy(): void {
    if(this.subscriptions){
      this.subscriptions.unsubscribe();
    }
  }
}