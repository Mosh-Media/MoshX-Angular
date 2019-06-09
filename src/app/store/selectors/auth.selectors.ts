import { createSelector } from '@ngrx/store';

import { IAppState } from '../state/app.state';
import { IAuthState } from '../state/auth.state';

const selectAuthState = (state: IAppState) => state.auth;

export const selectCurrentUser = createSelector(
    selectAuthState,
    (state: IAuthState) => state.currentUser
);