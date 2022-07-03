import { Action, createReducer, on } from '@ngrx/store';
import * as UsuariosFeatureActions from './usuarios-feature.actions';

export const usuariosFeatureFeatureKey = 'usuariosFeature';

export interface State {

}

export const initialState: State = {

};

export const reducer = createReducer(
  initialState,

  on(UsuariosFeatureActions.loadUsuariosFeatures, state => state),
  on(UsuariosFeatureActions.loadUsuariosFeaturesSuccess, (state, action) => state),
  on(UsuariosFeatureActions.loadUsuariosFeaturesFailure, (state, action) => state),

);
