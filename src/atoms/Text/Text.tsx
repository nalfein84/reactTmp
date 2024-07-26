import React, { useContext } from 'react'
import { Text as Label, View } from 'react-native'
import { IText } from '../../Interfaces'
import { BorderColor, Color, Flex, FontSize, FontWeight, LineHeight, PaddingTop, Width } from '../../Assets'
import { DefaultTextProps } from '../../DefaultProps'
import { ThemeContext } from '../../Providers/ThemeProvider/ThemeProvider'
import Icon from '../Icon/Icon'
import { ETextType } from '../../Enum/Enum'

function Text(props: IText) {
    const theme = useContext(ThemeContext)
    let textStyle = {}
    switch (props?.type) {
        case ETextType.subTitle1:
            textStyle = {
                ...FontWeight.fontWt400,
                ...Color(theme).black
            }
            break;
        case ETextType.subTitle1:
            textStyle = {
                ...FontWeight.fontWt400,
                ...FontSize.ftSz10,
                ...LineHeight.lineHt16,
                ...Color(theme).gray,
            }
            break;

        default:
            break;
    }
    const textContent = () => {
        return (<Label
            allowFontScaling={props.allowFontScaling}
            {...(props.onLongPress !== undefined && { onLongPress: props.onLongPress })}
            {...(props.onPress !== undefined && { onPress: props.onPress })}
            style={[textStyle, props.textStyle]}
            {...props}
        >
            {props.children}
        </Label>
        )
    }
    const rederIcon = () => {
        if (props.iconName) {
            return (
                <View style={[Flex.row, Flex.alignItemsCenter]}>
                    {props.isLeftIcon && <Icon size={props.iconSize} name={props.iconName} onPress={props.onPress} color={props.color} style={props.styleIcon} />}
                    {textContent()}
                    {props.isRightIcon && <Icon size={props.iconSize} name={props.iconName} onPress={props.onPress} color={props.color} style={props.styleIcon} />}
                </View>
            )
        }
        else if (props.isWithTopBar) {
            return (
                <View style={{ ...Width.full, borderTopWidth: 2, ...BorderColor(theme).primary, ...PaddingTop.p12, ...props.styleTopBar }}>
                    {textContent()}
                </View>
            )

        }
        else {
            return textContent()
        }
    }
    return (
        rederIcon()
    )
}
Text.defaultProps = {
    ...DefaultTextProps
}
export default Text