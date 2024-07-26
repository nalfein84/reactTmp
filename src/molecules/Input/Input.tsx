import React, { useContext } from 'react'
import { View } from 'react-native';
import { AtomInput, Text } from '../../Atoms'
import { IMoleculeInput } from '../../Interfaces';
import { BG, BorderColor, BorderRadius, InputStyle, MarginTop, PaddingTop, Shadow, Width } from '../../Assets';
import { ThemeContext } from '../../Providers/ThemeProvider/ThemeProvider';
import { DEFAULTInputProps, DefaultMeleculeInputProps } from '../../DefaultProps';
import { ETextType } from '../../Enum/Enum';

const MoleculeInput = (props: IMoleculeInput) => {

    const theme = useContext(ThemeContext)

    let styleContainer = {
        ...InputStyle.defaultContainer,
        ...BorderRadius.br20,
        ...BorderColor(theme).primary,
        ...BG(theme).primary,
        ...MarginTop.m4,
        ...props.styleContainer,
        ...Shadow.primary
    }

    const styleExternalContainer = {
        ...Width.full,
        ...props.styleExternalContainer
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


    return (
        <View style={styleExternalContainer}>
            {props.withLabel && <Text type={props.labelType} >{props.label} </Text>}
            <View style={styleContainer} >
                <AtomInput {...props} />
            </View>
            {props.isInvalid && <Text type={ETextType.title1} textStyle={{ ...PaddingTop.p8 }}>{props.errorText}</Text>}
        </View>
    )
}

MoleculeInput.defaultProps = {
    ...DEFAULTInputProps,
    ...DefaultMeleculeInputProps
}
export default MoleculeInput
