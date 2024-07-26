import { StyleProp, ViewStyle } from "react-native"
import { IButton, IIcon, IInput } from "../Atoms"
import { EFlexDirection, ETextType } from "../../Enum/Enum"

interface IMoleculeInput extends Omit<IInput, 'onBlur' | 'onChange'> {
    onBlur?: any
    onChange?: any
    onFocus?: any
    style?: object
    value?: any
    styleContainer?: object
    styleExternalContainer?: object
    isInvalid?: boolean
    isValid?: boolean
    withLabel?: boolean
    labelType?: ETextType
    label?: string
    DropDowncontainerStyle?: object
    dropdownStyle?: object
    placeholderTextColor?: string
    isSelect?: boolean
    selectedTextStyle?: object
    itemContainerDropdownStyle?: object
    activeItemStyle?: object
    itemsStyle?: object
    errorText?: string
}
interface IModal {
    transparent?: boolean
    style?: StyleProp<ViewStyle>
    animationType?: 'none' | 'slide' | 'fade'
    onShow?: any
    contentStyle?: StyleProp<ViewStyle>
    children: React.ReactNode
    withCloseIcon?: boolean
    onExit?: Function
    onShowFunc?: Function
    withSubmitAction?: boolean
    withCloseAction?: boolean
    containerBtnStyle?: StyleProp<ViewStyle>
    btnResetProps?: IButton
    btnSubmitProps?: IButton
    containerStyle?: object
    styleBtnSubmit?: any
    styleWrapChildren?: any
    styleContainerBtnSubAndClose?: any
    btnSubAndCloseContainerDirection?: EFlexDirection
    modalFromBottom?: boolean
    diffSize?: number
}

interface IProduct {
    id:number, 
    name: string, 
    desc:string, 
    imgUrl: string
}

export type { IMoleculeInput, IModal }