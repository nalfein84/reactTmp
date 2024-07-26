import AuthReducer, { setToken, resetToken, refreshTokens } from "./Authreducer/AuthReducer";
import { closeModal, openModal, setLoading, setUpdate } from "./ModalReducer/ModalReducer";
import SettingReducer, { setLang, setTheme, setIsBottomNavigation } from "./SettingReducer/SettingReducer";
export {
    setToken,
    resetToken,
    refreshTokens,
    AuthReducer,
    setLang,
    setTheme,
    setIsBottomNavigation,
    SettingReducer,
    openModal,
    closeModal,
    setUpdate,
    setLoading,
}