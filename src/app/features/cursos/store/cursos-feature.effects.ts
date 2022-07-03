import { Injectable } from '@angular/core';
import { Actions, createEffect, ofType } from '@ngrx/effects';
import { catchError, map, concatMap } from 'rxjs/operators';
import { Observable, EMPTY, of } from 'rxjs';
import * as CursosFeatureActions from './cursos-feature.actions';


@Injectable()
export class CursosFeatureEffects {

  loadCursosFeatures$ = createEffect(() => {
    return this.actions$.pipe( 

      ofType(CursosFeatureActions.loadCursosFeatures),
      concatMap(() =>
        /** An EMPTY observable only emits completion. Replace with your own observable API request */
        EMPTY.pipe(
          map(data => CursosFeatureActions.loadCursosFeaturesSuccess({ data })),
          catchError(error => of(CursosFeatureActions.loadCursosFeaturesFailure({ error }))))
      )
    );
  });


  constructor(private actions$: Actions) {}
}
