import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { Router } from '@angular/router';
import { Store } from '@ngrx/store';
import { loadAlumnosFeatures, loadElementByIdFeatures, postAlumnosFeatures } from '../../store/alumnos-feature.actions';
import { selectAlumnosSuccess, selectElementByIdSuccess } from '../../store/alumnos-feature.selectors';

@Component({
  selector: 'app-alumnos-edit',
  templateUrl: './alumnos-edit.component.html',
  styleUrls: ['./alumnos-edit.component.scss']
})
export class AlumnosEditComponent implements OnInit {

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
      avatar:[''],
      id:['']
    })

    this.store.select(selectElementByIdSuccess).subscribe(
      val=>{this.alumnoToEdit=val
        
      this.alumnoForm.get('nombre')?.patchValue(this.alumnoToEdit.nombre);
      this.alumnoForm.get('apellido')?.patchValue(this.alumnoToEdit.apellido);
      this.alumnoForm.get('email')?.patchValue(this.alumnoToEdit.email);
      this.alumnoForm.get('telefono')?.patchValue(this.alumnoToEdit.telefono);
      this.alumnoForm.get('direccion')?.patchValue(this.alumnoToEdit.direccion);
      this.alumnoForm.get('dni')?.patchValue(this.alumnoToEdit.dni);
      this.alumnoForm.get('avatar')?.patchValue(this.alumnoToEdit.avatar);
      this.alumnoForm.get('id')?.patchValue(this.alumnoToEdit.id);
    
    })
  }


  submit(){
    let alumnos:any=[];
    debugger;
    alumnos=this.alumnoForm.value;
    console.log(alumnos)
    /*
    this.store.select(selectAlumnosSuccess).subscribe(
      (val)=>{
        alumnos=this.alumnoForm.value;
        let index=1;
        debugger;
        if(val.alumnos.length>0 && !this.alumnoToEdit){
          index=val.alumnos.length+1;
          this.alumnoForm.value.id=index;
          val.alumnos.push(this.alumnoForm.value);
        }else if(val.alumnos.length===0 && !this.alumnoToEdit){
          this.alumnoForm.value.id=index;
          val.alumnos.push(this.alumnoForm.value)}

        if(this.alumnoToEdit){
          debugger;
          let indice=val.alumnos.findIndex((x)=>x.id===this.alumnoToEdit.id);
          val.alumnos[indice]=this.alumnoForm.value;
          }
        }
    )
*/
    

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
    
    
    this.store.dispatch(loadElementByIdFeatures({id:alumnos.id}))
    //this.store.dispatch(postAlumnosFeatures({alumnos:alumnos}));
    this.router.navigate(['/alumnos']);
  }

}
