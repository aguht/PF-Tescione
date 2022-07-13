import { Component, OnInit } from '@angular/core';
import { Store } from '@ngrx/store';
import { Subscription } from 'rxjs';
import { loadElementByIdFeatures } from '../../store/alumnos-feature.actions';
import { alumnosFeatureFeatureKey } from '../../store/alumnos-feature.reducer';
import { selectElementByIdSuccess } from '../../store/alumnos-feature.selectors';

@Component({
  selector: 'app-alumnos-info',
  templateUrl: './alumnos-info.component.html',
  styleUrls: ['./alumnos-info.component.scss']
})
export class AlumnosInfoComponent implements OnInit {

  alumno:any=[];
  nombreApellido:string;
  subscriptions:Subscription;
  
  constructor(private store:Store) { }

  ngOnInit(): void {
    
    this.store.select(selectElementByIdSuccess).subscribe(
      val=>{debugger;
        this.alumno=val}
    )
  }

  ngOnDestroy(): void {
    if(this.subscriptions){
      this.subscriptions.unsubscribe();
    }
  }

}
