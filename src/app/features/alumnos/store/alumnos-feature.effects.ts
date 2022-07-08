import { Injectable } from '@angular/core';
import { Actions, createEffect, ofType } from '@ngrx/effects';
import { catchError, map, concatMap, mergeMap } from 'rxjs/operators';
import { Observable, EMPTY, of } from 'rxjs';
import * as AlumnosFeatureActions from './alumnos-feature.actions';
import { AlumnosService } from 'src/app/shared/services/alumnos.service';


@Injectable()
export class AlumnosFeatureEffects {

  loadAlumnosFeatures$=createEffect(() => {
    return this.actions$.pipe(
      ofType(AlumnosFeatureActions.loadAlumnosFeatures),
      mergeMap(()=>this.alumnosService.getAlumnosList()
      .pipe(map(alumnos=>AlumnosFeatureActions.loadAlumnosFeaturesSuccess({alumnos})),
      catchError(()=>EMPTY)
      ))
    );
  });

  postAlumnosFeatures$=createEffect(()=>{
    return this.actions$.pipe(
      ofType(AlumnosFeatureActions.postAlumnosFeatures),
      mergeMap((alumnos)=>this.alumnosService.postAlumnos(alumnos.alumnos)
      .pipe(
        map(()=>AlumnosFeatureActions.loadAlumnosFeatures()),
        catchError(()=>EMPTY)
      ))
    );
  });

  deleteAlumnosFeatures$=createEffect(()=>{
    return this.actions$.pipe(
      ofType(AlumnosFeatureActions.deleteAlumnosFeatures),
      mergeMap((alumnos)=>this.alumnosService.deleteAlumnos(alumnos.id)
      .pipe(
        map(()=>AlumnosFeatureActions.loadAlumnosFeatures()),
        catchError(()=>EMPTY)
     ))
    );
  });

  loadProductDetailedFeatures$=createEffect(()=>{
    return this.actions$.pipe(
      ofType(AlumnosFeatureActions.loadElementByIdFeatures),
      mergeMap((alumnos)=>this.alumnosService.getAlumnosDetail(alumnos.id)
      .pipe(
        map((alumnosDetailed)=>AlumnosFeatureActions.loadElementByIdFeaturesSucces({alumnosDetailed})),
        catchError(()=>EMPTY)
     ))
    );
  });

  constructor(private actions$: Actions, private alumnosService:AlumnosService) {}
}
