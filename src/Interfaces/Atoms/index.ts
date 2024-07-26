import {
    GestureResponderEvent, StyleProp, TextProps, TextStyle, TouchableHighlightProps, TouchableOpacityProps,
} from "react-native";
import { TextInputProps } from "react-native";
import { IKeys } from "../Common";
import { EButtonType, ETextType } from "../../Enum/Enum";


interface IText extends TextProps {
    onLongPress?: ((event: GestureResponderEvent) => void) | undefined;
    onPress?: ((event: GestureResponderEvent) => void) | undefined;
    textStyle?: StyleProp<TextStyle>
    type?: ETextType
    theme?: IKeys
    weight?: string | undefined
    iconName?: string
    iconSize?: number
    color?: string
    isLeftIcon?: boolean
    isRightIcon?: boolean
    styleIcon?: StyleProp<TextStyle>
    isWithTopBar?: boolean
    styleTopBar?: any
}

interface IButton extends TouchableOpacityProps, TouchableHighlightProps {
    children?: React.ReactNode
    text?: string
    btnStyle?: Object
    textStyle?: StyleProp<TextStyle>
    isCustom?: boolean
    isTouchableOpacity?: boolean
    isTouchableHighlight?: boolean
    type?: EButtonType
    theme?: IKeys
    isRightIcon?: boolean
    isLeftIcon?: boolean
    containerClassName?: object
    isLoading?: boolean
    isCustomIcon?: boolean
    isConductor?: boolean
    loaderColor?: string
}

interface IIcon {
    onPress?: ((event: GestureResponderEvent) => void) | undefined
    name: string
    size?: number
    color?: string
    style?: any
}

interface IInput extends TextInputProps {
    isValid?: boolean
    styleContainer?: any
    styleInput?: any
    isInvalid?: boolean
    inputSize?: string | undefined
    withIcon?: boolean
    iconProps?: IIcon
    paddingLeftInput?: number
    withLabel?: boolean
    label?: string
    labelType?: string
    styleExternalContainer?: object
    contentInputStyle?: object
}

interface ISVG {
    height?: number | string
    width?: number | string
    color?: string
    onPress?: () => void
    isActive?: boolean
}

interface IUser {
    _id: string
    firstName: string
    lastName: string
    phone: number
}


interface IProduct {
    id:string, 
    name: string, 
    desc:string, 
    imgUrl: string
}

export type {
    IProduct,
    IText,
    IButton,
    IIcon,
    IInput,
    ISVG,

}