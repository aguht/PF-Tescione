import { Injectable } from '@angular/core';
import { Actions, createEffect, ofType } from '@ngrx/effects';
import { catchError, map, concatMap } from 'rxjs/operators';
import { Observable, EMPTY, of } from 'rxjs';
import * as AlumnosFeatureActions from './alumnos-feature.actions';


@Injectable()
export class AlumnosFeatureEffects {

  loadAlumnosFeatures$ = createEffect(() => {
    return this.actions$.pipe( 

      ofType(AlumnosFeatureActions.loadAlumnosFeatures),
      concatMap(() =>
        /** An EMPTY observable only emits completion. Replace with your own observable API request */
        EMPTY.pipe(
          map(data => AlumnosFeatureActions.loadAlumnosFeaturesSuccess({ data })),
          catchError(error => of(AlumnosFeatureActions.loadAlumnosFeaturesFailure({ error }))))
      )
    );
  });


  constructor(private actions$: Actions) {}
}
