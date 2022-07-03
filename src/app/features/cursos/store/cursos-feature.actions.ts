import { createAction, props } from '@ngrx/store';

export const loadCursosFeatures = createAction(
  '[CursosFeature] Load CursosFeatures'
);

export const loadCursosFeaturesSuccess = createAction(
  '[CursosFeature] Load CursosFeatures Success',
  props<{ data: any }>()
);

export const loadCursosFeaturesFailure = createAction(
  '[CursosFeature] Load CursosFeatures Failure',
  props<{ error: any }>()
);
