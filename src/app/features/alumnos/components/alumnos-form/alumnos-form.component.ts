import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { Router } from '@angular/router';
import { Store } from '@ngrx/store';
import { loadAlumnosFeatures, postAlumnosFeatures } from '../../store/alumnos-feature.actions';
import { selectAlumnosSuccess, selectElementByIdSuccess } from '../../store/alumnos-feature.selectors';

@Component({
  selector: 'app-alumnos-form',
  templateUrl: './alumnos-form.component.html',
  styleUrls: ['./alumnos-form.component.scss']
})
export class AlumnosFormComponent implements OnInit {

  alumnoForm:FormGroup;
  alumnoToEdit:any=[];

  constructor(private fb: FormBuilder, private store: Store, private router:Router) { }

  ngOnInit(): void {
    this.alumnoForm=this.fb.group({
      nombre:[''],
      apellido:[''],
      email:[''],
      telefono:[''],
      direccion:[''],
      dni:[''],
      avatar:['']      
    })

    /* this.store.select(selectElementByIdSuccess).subscribe(
      val=>{debugger;
        this.alumnoToEdit=val */
    
  

    if(this.alumnoToEdit){
      this.alumnoForm.get('nombre')?.patchValue(this.alumnoToEdit.nombre);
      this.alumnoForm.get('apellido')?.patchValue(this.alumnoToEdit.apellido);
      this.alumnoForm.get('email')?.patchValue(this.alumnoToEdit.email);
      this.alumnoForm.get('telefono')?.patchValue(this.alumnoToEdit.telefono);
      this.alumnoForm.get('direccion')?.patchValue(this.alumnoToEdit.direccion);
      this.alumnoForm.get('dni')?.patchValue(this.alumnoToEdit.dni);
      this.alumnoForm.get('avatar')?.patchValue(this.alumnoToEdit.avatar);
    }
   // })
  }

  
  submit(){
    let alumnos:any=[];
    
    
    alumnos=this.alumnoForm.value;
        
    
   /* alumnos=this.alumnoForm.value;
    let index=1;
    if(alumnos.length>0 && !this.alumnoToEdit){
      index=alumnos.length+1;
      this.alumnoForm.value['id']=index;
      alumnos.push(this.alumnoForm.value);
    }else if(alumnos.length===0 && !this.alumnoToEdit){
      this.alumnoForm.value['id']=index;
      alumnos.push(this.alumnoForm.value)
    }*/
    
    

    this.store.dispatch(postAlumnosFeatures({alumnos:alumnos}));
    this.router.navigate(['/alumnos']);
  }

}
