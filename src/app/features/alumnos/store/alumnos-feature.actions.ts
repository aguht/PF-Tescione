import { createAction, props } from '@ngrx/store';

export const loadAlumnosFeatures = createAction(
  '[AlumnosFeature] Load AlumnosFeatures'
);

export const loadAlumnosFeaturesSuccess = createAction(
  '[AlumnosFeature] Load AlumnosFeatures Success',
  props<{ data: any }>()
);

export const loadAlumnosFeaturesFailure = createAction(
  '[AlumnosFeature] Load AlumnosFeatures Failure',
  props<{ error: any }>()
);
