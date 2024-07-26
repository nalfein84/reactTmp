
import { ILogin } from "../Interfaces";
import { apiPost } from "./StandardApi";

const loginApi = async (body: ILogin) => {
    return apiPost("auth/login", body)
}

export {
    loginApi,

}