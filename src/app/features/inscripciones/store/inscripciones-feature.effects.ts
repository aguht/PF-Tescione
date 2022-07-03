import { Injectable } from '@angular/core';
import { Actions, createEffect, ofType } from '@ngrx/effects';
import { catchError, map, concatMap } from 'rxjs/operators';
import { Observable, EMPTY, of } from 'rxjs';
import * as InscripcionesFeatureActions from './inscripciones-feature.actions';


@Injectable()
export class InscripcionesFeatureEffects {

  loadInscripcionesFeatures$ = createEffect(() => {
    return this.actions$.pipe( 

      ofType(InscripcionesFeatureActions.loadInscripcionesFeatures),
      concatMap(() =>
        /** An EMPTY observable only emits completion. Replace with your own observable API request */
        EMPTY.pipe(
          map(data => InscripcionesFeatureActions.loadInscripcionesFeaturesSuccess({ data })),
          catchError(error => of(InscripcionesFeatureActions.loadInscripcionesFeaturesFailure({ error }))))
      )
    );
  });


  constructor(private actions$: Actions) {}
}
