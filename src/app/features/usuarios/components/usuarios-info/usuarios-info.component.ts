import { Component, OnInit } from '@angular/core';
import { Store } from '@ngrx/store';
import { Subscription } from 'rxjs';
import { selectElementByIdSuccess } from '../../store/usuarios-feature.selectors';

@Component({
  selector: 'app-usuarios-info',
  templateUrl: './usuarios-info.component.html',
  styleUrls: ['./usuarios-info.component.scss']
})
export class UsuariosInfoComponent implements OnInit {

  usuario:any=[];
  subscriptions:Subscription;
  
  constructor(private store:Store) { }

  ngOnInit(): void {
    
    this.store.select(selectElementByIdSuccess).subscribe(
      val=>{this.usuario=val}
    )
  }

  ngOnDestroy(): void {
    if(this.subscriptions){
      this.subscriptions.unsubscribe();
    }
  }
}

