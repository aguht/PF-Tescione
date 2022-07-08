import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { UnionPipe } from './Pipes/union.pipe';
import { MaterialModule } from './material.module';



@NgModule({
  declarations: [
    UnionPipe
  ],
  imports: [
    CommonModule
  ],
  exports:[
    UnionPipe,
    MaterialModule
  ]
})
export class SharedModule { }
