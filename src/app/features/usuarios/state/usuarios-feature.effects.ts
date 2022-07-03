import { Injectable } from '@angular/core';
import { Actions, createEffect, ofType } from '@ngrx/effects';
import { catchError, map, concatMap } from 'rxjs/operators';
import { Observable, EMPTY, of } from 'rxjs';
import * as UsuariosFeatureActions from './usuarios-feature.actions';


@Injectable()
export class UsuariosFeatureEffects {

  loadUsuariosFeatures$ = createEffect(() => {
    return this.actions$.pipe( 

      ofType(UsuariosFeatureActions.loadUsuariosFeatures),
      concatMap(() =>
        /** An EMPTY observable only emits completion. Replace with your own observable API request */
        EMPTY.pipe(
          map(data => UsuariosFeatureActions.loadUsuariosFeaturesSuccess({ data })),
          catchError(error => of(UsuariosFeatureActions.loadUsuariosFeaturesFailure({ error }))))
      )
    );
  });


  constructor(private actions$: Actions) {}
}
