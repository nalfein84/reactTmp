import React, { useContext } from 'react';
import { TextInput, View } from 'react-native';
import { IInput } from '../../Interfaces';
import {
    BG,
    BorderColor,
    BorderRadius,
    Color,
    Container,
    Flex,
    Height,
    InputStyle,
    MarginTop,
    PaddingHorizontal,
    PaddingLeft,
    PaddingRight,
    Shadow,
    Width
} from '../../Assets';
import { DEFAULTInputProps } from '../../DefaultProps';
import { ThemeContext } from '../../Providers/ThemeProvider/ThemeProvider';

import { Icon } from '..';

const Input = (props: IInput) => {
    const theme = useContext(ThemeContext)
    const inputPaddingHorizental = props.withIcon ? PaddingHorizontal.p44 : PaddingHorizontal.p16

    let styleInput = {
        ...Color(theme).commonBlack,
        ...Width.full,
        ...Height.full,
        ...Container.relative,
        placeholderTextColor: theme.commonBlack,
        ...props.styleInput,
    }

    const styleContent = {
        ...inputPaddingHorizental,
        ...BG(theme).appGradiant,
        ...Flex.flex1,
        ...BorderRadius.br20,
        ...Container.relative,
        ...props.contentInputStyle
    }

    let styleContainer = {
        ...BorderRadius.br20,
        ...BorderColor(theme).primary,
        ...BG(theme).primary,
        ...MarginTop.m4,
        ...props.styleContainer,
        ...Shadow.primary
    }

    if (props.isInvalid) styleContainer = {
        ...styleContainer,
        ...BorderColor(theme).error1,
        ...InputStyle.InvalidStyle
    }

    if (props.isValid) styleContainer = {
        ...styleContainer,
        ...BorderColor(theme).success1,
        ...InputStyle.validStyle
    }

    switch (props.inputSize) {
        case 'small':
            styleInput = { ...styleInput, height: 36 }
            break;
        default:
            break;
    }

    const renderIcon = () => {
        return (
            <View
                style={{
                    ...Container.absolute,
                    ...InputStyle.iconContainer,
                    ...Flex.center,
                    ...Height.full,
                    ...PaddingLeft.p18,
                    ...PaddingRight.p9,
                }}
            >
                <Icon
                    size={props.iconProps?.size}
                    color={props.iconProps?.color}
                    name={props.iconProps?.name}
                />
            </View>
        )
    }

    return (
        <View style={styleContent} >
            {props.withIcon && renderIcon()}
            <TextInput
                style={styleInput}
                {...props}
            />
        </View>
    );
};

export default Input;

Input.defaultProps = {
    ...DEFAULTInputProps,
}
