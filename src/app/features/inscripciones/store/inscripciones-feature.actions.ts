import { createAction, props } from '@ngrx/store';

export const loadInscripcionesFeatures = createAction(
  '[InscripcionesFeature] Load InscripcionesFeatures'
);

export const loadInscripcionesFeaturesSuccess = createAction(
  '[InscripcionesFeature] Load InscripcionesFeatures Success',
  props<{ data: any }>()
);

export const loadInscripcionesFeaturesFailure = createAction(
  '[InscripcionesFeature] Load InscripcionesFeatures Failure',
  props<{ error: any }>()
);
