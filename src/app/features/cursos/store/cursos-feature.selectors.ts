import { createFeatureSelector, createSelector } from '@ngrx/store';
import * as fromCursosFeature from './cursos-feature.reducer';

export const selectCursosFeatureState = createFeatureSelector<fromCursosFeature.State>(
  fromCursosFeature.cursosFeatureFeatureKey
);
