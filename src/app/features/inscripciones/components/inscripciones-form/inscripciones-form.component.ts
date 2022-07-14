import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { Router } from '@angular/router';
import { Store } from '@ngrx/store';
import { postInscripcionesFeatures } from '../../store/inscripciones-feature.actions';

@Component({
  selector: 'app-inscripciones-form',
  templateUrl: './inscripciones-form.component.html',
  styleUrls: ['./inscripciones-form.component.scss']
})
export class InscripcionesFormComponent implements OnInit {

  inscripcionForm:FormGroup;
  inscripcionToEdit:any=[];

  constructor(private fb: FormBuilder, private store: Store, private router:Router) { }

  ngOnInit(): void {
    this.inscripcionForm=this.fb.group({
      user:[''],
      pass:[''],
      nombre:[''],
      email:['']     
      }
    )
  }

  submit(){
    let inscripciones:any=[];
    inscripciones=this.inscripcionForm.value;
    this.store.dispatch(postInscripcionesFeatures({inscripciones:inscripciones}));
    this.router.navigate(['/inscripciones']);
  }

}