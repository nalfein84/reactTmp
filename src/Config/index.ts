
import { store } from "../Redux/Store/Store"
enum EEnv {
    dev,
    recette,
    preprod,
    prod,
    local
}
interface IConfig {
    env: EEnv
}
const config: IConfig = {
    env: EEnv.dev
}
const lang = store.getState().setting.lang
const defineApiUrl = () => {
    switch (config.env) {
        case EEnv.dev:
            return "http://localhost:3000/"
        case EEnv.recette:
            return ""
        case EEnv.preprod:
            return ""
        case EEnv.local:
            return ""
        case EEnv.prod:
            return ""
        default:
            return ""
    }
}
const defineSocketUrl = () => {
    switch (config.env) {
        case EEnv.dev:
            return ""
        case EEnv.recette:
            return ""
        case EEnv.preprod:
            return ""
        case EEnv.local:
            return ""
        case EEnv.prod:
            return ""
        default:
            return ""
    }
}


export { config, EEnv, }
export const API_URL = defineApiUrl();
export const API_URL_Lang = API_URL + lang + '/';
export const SOCKET_URL = defineSocketUrl()