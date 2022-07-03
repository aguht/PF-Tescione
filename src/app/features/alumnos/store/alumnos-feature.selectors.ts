import { createFeatureSelector, createSelector } from '@ngrx/store';
import * as fromAlumnosFeature from './alumnos-feature.reducer';

export const selectAlumnosFeatureState = createFeatureSelector<fromAlumnosFeature.State>(
  fromAlumnosFeature.alumnosFeatureFeatureKey
);
