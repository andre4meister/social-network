import { stopSubmit } from "redux-form";
import {authAPI, securityAPI} from "../api/api";

const SET_USER_DATA = 'SET_USER_DATA';
const GET_CAPTCHA_URL = 'GET_CAPTCHA_URL';

type InitialStateType = {
    userId: null | number
    email: null | string
    login: null | string
    isAuth: boolean
    captchaUrl: null | string
}
let initialState: InitialStateType = {
    userId: null,
    email: null,
    login: null,
    isAuth: false,
    captchaUrl: null,
};

const authReducer = (state = initialState, action: any): InitialStateType => {
    switch (action.type) {
        case SET_USER_DATA:
            return {
                ...state,
                ...action.payload,
            };
        case GET_CAPTCHA_URL:
            return {
                ...state, captchaUrl: action.captchaUrl
            }
        default:
            return state
    }
}

export type setAuthUserDataActionType = {
    type: typeof SET_USER_DATA
    payload: {
        userId: number
        email: string
        login: string
        isAuth: boolean
    }
}

export const setAuthUserData = (userId: number, email: string, login: string, isAuth: boolean): setAuthUserDataActionType => ({
    type: SET_USER_DATA,
    payload: {userId, email, login, isAuth}
});

export type getCaptchaUrlSuccessActionType = {
    type: typeof GET_CAPTCHA_URL
    captchaUrl: string | null
}
export const getCaptchaUrlSuccess = (captchaUrl: string | null): getCaptchaUrlSuccessActionType => ({
    type: GET_CAPTCHA_URL,
    captchaUrl
});


export const auth = (id?: number, email?: string, login?: string, rememberMe?: boolean) => async (dispatch) => {
    let response = await authAPI.auth()
    if (response.data.resultCode === 0) {
        let {id, email, login} = response.data.data;
        dispatch(setAuthUserData(id, email, login, true));
    }
}


export const login = (email: string, password: string, rememberMe: boolean, captcha: string) => async (dispatch: any) => {
    let response = await authAPI.login(email, password, rememberMe, captcha)
    if (response.data.resultCode === 0) {
        dispatch(auth());
    } else {
        if (response.data.resultCode === 10) {
            dispatch(getCaptchaUrl());
        }
        let message = response.data.messages.length > 0 ? response.data.messages[0] : 'Some error';
        dispatch(stopSubmit('login', {_error: message}))
    }
}

export const logout = () => async (dispatch) => {
    let response = await authAPI.logout()
    if (response.data.resultCode === 0) {
        dispatch(auth(null, null, null, false));
    }
}

export const getCaptchaUrl = () => async (dispatch) => {
    const response = await securityAPI.getCaptchaUrl()
    const captchaUrl = response.data.url;
    dispatch(getCaptchaUrlSuccess(captchaUrl));

}
export default authReducer;