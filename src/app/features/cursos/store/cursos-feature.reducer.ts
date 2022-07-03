import { Action, createReducer, on } from '@ngrx/store';
import * as CursosFeatureActions from './cursos-feature.actions';

export const cursosFeatureFeatureKey = 'cursosFeature';

export interface State {

}

export const initialState: State = {

};

export const reducer = createReducer(
  initialState,

  on(CursosFeatureActions.loadCursosFeatures, state => state),
  on(CursosFeatureActions.loadCursosFeaturesSuccess, (state, action) => state),
  on(CursosFeatureActions.loadCursosFeaturesFailure, (state, action) => state),

);
