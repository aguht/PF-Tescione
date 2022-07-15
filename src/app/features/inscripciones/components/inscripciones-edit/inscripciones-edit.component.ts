import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { Router } from '@angular/router';
import { Store } from '@ngrx/store';
import { updateInscripcionesFeatures } from '../../store/inscripciones-feature.actions';
import { selectInscripcionByIdSuccess } from '../../store/inscripciones-feature.selectors';

@Component({
  selector: 'app-inscripciones-edit',
  templateUrl: './inscripciones-edit.component.html',
  styleUrls: ['./inscripciones-edit.component.scss']
})
export class InscripcionesEditComponent implements OnInit {

  inscripcionForm:FormGroup;
  inscripcionToEdit:any=[];

  constructor(private fb: FormBuilder, private store: Store, private router:Router) { }

  ngOnInit(): void {
    this.inscripcionForm=this.fb.group({
      user:[''],
      pass:[''],
      nombre:[''],
      email:[''],
      id:[''] 
      }
    )

    this.store.select(selectInscripcionByIdSuccess).subscribe(
      val=>{
        this.inscripcionToEdit=val
        this.inscripcionForm.get('user')?.patchValue(this.inscripcionToEdit.user);
        this.inscripcionForm.get('pass')?.patchValue(this.inscripcionToEdit.pass);
        this.inscripcionForm.get('nombre')?.patchValue(this.inscripcionToEdit.nombre);
        this.inscripcionForm.get('email')?.patchValue(this.inscripcionToEdit.email);
        this.inscripcionForm.get('id')?.patchValue(this.inscripcionToEdit.id)
        }
      )
  }

  
  submit(){
    let inscripciones:any=[];
    inscripciones=this.inscripcionForm.value;
    this.store.dispatch(updateInscripcionesFeatures({inscripciones}));
    this.router.navigate(['/inscripciones']);
  }

}