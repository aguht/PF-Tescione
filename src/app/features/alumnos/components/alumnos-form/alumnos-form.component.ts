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
  alumnoToEdit:any;

  constructor(private fb: FormBuilder, private store: Store, private router:Router) { }

  ngOnInit(): void {
    this.alumnoForm=this.fb.group({
      nombre:[''],
      apellido:[''],
      email:[''],
      telefono:[''],
      direccion:[''],
      dni:[''],
      avatar:[''],
      id:['']
    })

    /*this.store.select(selectElementByIdSuccess).subscribe(
      val=>{this.alumnoToEdit=val}
    )*/

    if(this.alumnoToEdit){
      this.alumnoForm.get('nombreAlumno')?.patchValue(this.alumnoToEdit.nombreAlumno);
      this.alumnoForm.get('apellidoAlumno')?.patchValue(this.alumnoToEdit.apellidoAlumno);
      this.alumnoForm.get('emailalumno')?.patchValue(this.alumnoToEdit.emailAlumno);
      this.alumnoForm.get('telefonoAlumno')?.patchValue(this.alumnoToEdit.telefonoAlumno);
      this.alumnoForm.get('direccionAlumno')?.patchValue(this.alumnoToEdit.direccionAlumno);
      this.alumnoForm.get('dniAlumno')?.patchValue(this.alumnoToEdit.dniAlumno);
      this.alumnoForm.get('avatarAlumno')?.patchValue(this.alumnoToEdit.avatarAlumno);
    }
  }

  submit(){
    let alumnos:any=[];
    debugger;
    this.store.select(selectAlumnosSuccess).subscribe(
      (val)=>{
        alumnos=this.alumnoForm.value;
        let index=1;
        debugger;
        if(val.alumnos.length>0 && !this.alumnoToEdit){
          index=val.alumnos.length+1;
          this.alumnoForm.value['id']=index;
          val.alumnos.push(this.alumnoForm.value);
        }else if(val.alumnos.length===0 && !this.alumnoToEdit){
          this.alumnoForm.value['id']=index;
          alumnos.push(this.alumnoForm.value)}
        }
    )
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
    
    if(this.alumnoToEdit){
    let indice=alumnos.findIndex((x:any)=>x.id===this.alumnoToEdit.id);
    alumnos[indice]=this.alumnoForm.value;
    }

    this.store.dispatch(postAlumnosFeatures({alumnos:alumnos}));
    this.router.navigate(['/alumnos']);
  }

}
