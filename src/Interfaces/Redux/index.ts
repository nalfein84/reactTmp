import { store } from "../../Redux/Store/Store"

interface IUser {
    firstName?: string
    lastName?: string
    email?: string
    _id: string
}

interface IAuthReducer {
    accessToken: string
    refreshToken: string
    user: IUser | null
    fromRegister: boolean
    isCreatedTrack: boolean
    isdeletedAccount: boolean
}

interface ISettingReducer {
    lang: string,
    theme: string
    isBottomNavigation?: boolean
}
interface IModalPayload {
    name: string
    data?: any
}
interface IModalAction {
    payload: IModalPayload
}
interface RefType {
    onClose: () => void,
    onOpen: () => void,
}
interface IModalReducer {
    data?: any,
    name: string,
    update?: any
}
interface IHistory {
    historyNavigation: string[]
}
export type {
    IAuthReducer,
    ISettingReducer,
    IModalPayload,
    IModalAction,
    IModalReducer,
    RefType,
    IHistory
}
export type RootState = ReturnType<typeof store.getState> 