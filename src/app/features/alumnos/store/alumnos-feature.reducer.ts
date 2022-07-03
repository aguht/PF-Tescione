import { Action, createReducer, on } from '@ngrx/store';
import * as AlumnosFeatureActions from './alumnos-feature.actions';

export const alumnosFeatureFeatureKey = 'alumnosFeature';

export interface State {

}

export const initialState: State = {

};

export const reducer = createReducer(
  initialState,

  on(AlumnosFeatureActions.loadAlumnosFeatures, state => state),
  on(AlumnosFeatureActions.loadAlumnosFeaturesSuccess, (state, action) => state),
  on(AlumnosFeatureActions.loadAlumnosFeaturesFailure, (state, action) => state),

);
