import { createFeatureSelector, createSelector } from '@ngrx/store';
import * as fromUsuariosFeature from './usuarios-feature.reducer';

export const selectUsuariosFeatureState = createFeatureSelector<fromUsuariosFeature.State>(
  fromUsuariosFeature.usuariosFeatureFeatureKey
);
