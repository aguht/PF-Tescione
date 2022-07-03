import { Action, createReducer, on } from '@ngrx/store';
import * as LoginFeatureActions from './login-feature.actions';

export const loginFeatureFeatureKey = 'loginFeature';

export interface State {

}

export const initialState: State = {

};

export const reducer = createReducer(
  initialState,

  on(LoginFeatureActions.loadLoginFeatures, state => state),
  on(LoginFeatureActions.loadLoginFeaturesSuccess, (state, action) => state),
  on(LoginFeatureActions.loadLoginFeaturesFailure, (state, action) => state),

);
