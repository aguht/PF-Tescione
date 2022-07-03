import { ComponentFixture, TestBed } from '@angular/core/testing';

import { InscripcionesEditComponent } from './inscripciones-edit.component';

describe('InscripcionesEditComponent', () => {
  let component: InscripcionesEditComponent;
  let fixture: ComponentFixture<InscripcionesEditComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ InscripcionesEditComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(InscripcionesEditComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
