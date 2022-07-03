import { createAction, props } from '@ngrx/store';

export const loadUsuariosFeatures = createAction(
  '[UsuariosFeature] Load UsuariosFeatures'
);

export const loadUsuariosFeaturesSuccess = createAction(
  '[UsuariosFeature] Load UsuariosFeatures Success',
  props<{ data: any }>()
);

export const loadUsuariosFeaturesFailure = createAction(
  '[UsuariosFeature] Load UsuariosFeatures Failure',
  props<{ error: any }>()
);
