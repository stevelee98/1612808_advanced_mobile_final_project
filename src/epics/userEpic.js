import { ActionEvent } from 'actions/actionEvent'
import { Observable } from 'rxjs';
import {
    map,
    filter,
    catchError,
    mergeMap
} from 'rxjs/operators';
import { ofType } from 'redux-observable';
import { delay, mapTo, switchMap } from 'rxjs/operators';
import { dispatch } from 'rxjs/internal/observable/range';
import * as userActions from 'actions/userActions';
import { ServerPath } from 'config/Server';
import { Header, handleErrors, consoleLogEpic, handleConnectErrors } from './commonEpic';
import { ErrorCode } from 'config/errorCode';
import { fetchError } from 'actions/commonActions';
import ApiUtil from 'utils/apiUtil';

export const loginEpic = action$ =>
    action$.pipe(
        ofType(ActionEvent.LOGIN),
        switchMap((action) =>
            fetch(ServerPath.API_URL + 'user/login', {
                method: 'POST',
                headers: ApiUtil.getHeader(),
                body: JSON.stringify(action.payload)
            }).then((response) => {
                if (response.ok) {
                    return response.json();
                } else if (response.status == 400) {
                    return { status: response.status };
                }
                return handleErrors(response)
            }).then((responseJson) => {
                return userActions.loginSuccess(responseJson);
            })
                .catch((error) => {
                    consoleLogEpic("LOGIN USER_EPIC:", ActionEvent.LOGIN, error)
                    return handleConnectErrors(error)
                })
        )
    );

export const registerEpic = action$ =>
    action$.pipe(
        ofType(ActionEvent.LOGIN),
        switchMap((action) =>
            fetch(ServerPath.API_URL + 'user/register', { 
                method: 'POST',
                headers: ApiUtil.getHeader(),
                body: JSON.stringify(action.payload)
            }).then((response) => {
                if (response.ok) {
                    return response.json();
                } else if (response.status == 400) {
                    return { status: response.status };
                }
                return handleErrors(response)
            }).then((responseJson) => {
                return userActions.registerSuccess(responseJson);
            })
                .catch((error) => {
                    consoleLogEpic("LOGIN USER_EPIC:", ActionEvent.LOGIN, error)
                    return handleConnectErrors(error)
                })
        )
    );
