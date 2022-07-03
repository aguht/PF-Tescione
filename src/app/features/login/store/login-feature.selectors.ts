import { createFeatureSelector, createSelector } from '@ngrx/store';
import * as fromLoginFeature from './login-feature.reducer';

export const selectLoginFeatureState = createFeatureSelector<fromLoginFeature.State>(
  fromLoginFeature.loginFeatureFeatureKey
);
