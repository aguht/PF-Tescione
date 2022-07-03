import { Injectable } from '@angular/core';
import { Actions, createEffect, ofType } from '@ngrx/effects';
import { catchError, map, concatMap } from 'rxjs/operators';
import { Observable, EMPTY, of } from 'rxjs';
import * as LoginFeatureActions from './login-feature.actions';


@Injectable()
export class LoginFeatureEffects {

  loadLoginFeatures$ = createEffect(() => {
    return this.actions$.pipe( 

      ofType(LoginFeatureActions.loadLoginFeatures),
      concatMap(() =>
        /** An EMPTY observable only emits completion. Replace with your own observable API request */
        EMPTY.pipe(
          map(data => LoginFeatureActions.loadLoginFeaturesSuccess({ data })),
          catchError(error => of(LoginFeatureActions.loadLoginFeaturesFailure({ error }))))
      )
    );
  });


  constructor(private actions$: Actions) {}
}
