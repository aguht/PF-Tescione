import { Action, createReducer, on } from '@ngrx/store';
import * as InscripcionesFeatureActions from './inscripciones-feature.actions';

export const inscripcionesFeatureFeatureKey = 'inscripcionesFeature';

export interface State {

}

export const initialState: State = {

};

export const reducer = createReducer(
  initialState,

  on(InscripcionesFeatureActions.loadInscripcionesFeatures, state => state),
  on(InscripcionesFeatureActions.loadInscripcionesFeaturesSuccess, (state, action) => state),
  on(InscripcionesFeatureActions.loadInscripcionesFeaturesFailure, (state, action) => state),

);
