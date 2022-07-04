import { Component, Input, OnInit, Output, ViewChild } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-sidebar',
  templateUrl: './sidebar.component.html',
  styleUrls: ['./sidebar.component.scss']
})
export class SidebarComponent implements OnInit {

  

  
  constructor(private router:Router) { }

  ngOnInit(): void { }

  nuevoE(){
    this.router.navigate(['/form/form']);
  }

  showList(){
    this.router.navigate(['/lista/alumnos'])
  }


}
