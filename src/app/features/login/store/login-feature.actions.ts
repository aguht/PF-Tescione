import { createAction, props } from '@ngrx/store';

export const loadLoginFeatures = createAction(
  '[LoginFeature] Load LoginFeatures'
);

export const loadLoginFeaturesSuccess = createAction(
  '[LoginFeature] Load LoginFeatures Success',
  props<{ data: any }>()
);

export const loadLoginFeaturesFailure = createAction(
  '[LoginFeature] Load LoginFeatures Failure',
  props<{ error: any }>()
);
