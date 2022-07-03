import { createFeatureSelector, createSelector } from '@ngrx/store';
import * as fromInscripcionesFeature from './inscripciones-feature.reducer';

export const selectInscripcionesFeatureState = createFeatureSelector<fromInscripcionesFeature.State>(
  fromInscripcionesFeature.inscripcionesFeatureFeatureKey
);
