import { API_URL } from "../Config";
import { refreshTokens, resetToken, setToken } from "../Redux/Reducers";
import { store } from "../Redux/Store/Store";
import { apiRefreshToken } from "./RefreshToken";

function ObjectToJsonString(obj: Object) {
    const jsonString = JSON.stringify(obj);
    return jsonString
}

function createHeader(token: string, contentType = 'application/json'): HeadersInit_ | undefined {
    if (contentType === 'form-data') {
        return {
            Authorization: 'Bearer ' + token
        };
    } else {
        return {
            'Content-Type': contentType,
            accept: 'application/json',
            Authorization: 'Bearer ' + token
        };
    }
};
async function processResponse(response: any, callback: Function): Promise<any> {
    let responseJson;
    try {
        responseJson = await response?.json();
    } catch (e) {
        return { statusCode: 500 };
    }
    if (responseJson.statusCode === 401) {
        const res = await apiRefreshToken();
        if (res.statusCode === 200) {
            store.dispatch(refreshTokens(res.data));
            return callback();
        } else {
            store.dispatch(
                resetToken()
            );
            return null;
        }
    } else if (responseJson.statusCode === 200) {
        return responseJson;
    } else {
        return responseJson;
    }
}

export async function apiGet(api: string): Promise<any> {
    const token = store.getState().auth.accessToken;
    let response
    try {
        response = await fetch(API_URL + api, {
            method: 'Get',
            headers: createHeader(token),
        });
    } catch (error) {
    }
    const resp = await processResponse(response, () => apiGet(api));
    return resp;
}

export async function apiPost(api: string, body: any): Promise<any> {
    body = ObjectToJsonString(body)
    const token = store.getState().auth.accessToken;
    const response = await fetch(API_URL + api, {
        method: 'POST',
        headers: createHeader(token),
        body: body
    });
    return processResponse(response, () => apiPost(api, body));
}

export async function apiDelete(api: string, body: any): Promise<any> {
    const token = store.getState().auth.accessToken;
    const response = await fetch(API_URL + api, {
        method: 'Delete',
        headers: createHeader(token, 'application/json'),
        body: body
    });
    return processResponse(response, () => apiDelete(api, body));
}

export async function apiPut(api: string, body: any, contentType = 'application/json'): Promise<any> {
    const token = store.getState().auth.accessToken;
    body = ObjectToJsonString(body)
    const response = await fetch(API_URL + api, {
        method: 'Put',
        headers: createHeader(token, contentType),
        body: body
    });
    return processResponse(response, () => apiPost(api, body));
}

export async function apiPostUpload(api: string, body: any, contentType = 'form-data'): Promise<any> {
    const token = store.getState().auth.accessToken;
    const response = await fetch(API_URL + api, {
        method: 'POST',
        headers: createHeader(token, contentType),
        body: body
    });
    return processResponse(response, () => apiPost(api, body));
}