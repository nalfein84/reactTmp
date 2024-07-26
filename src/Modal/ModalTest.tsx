import React, { Ref, forwardRef, useContext } from 'react'
import { Modal } from '../Molecules'
import { RefType, RootState } from '../Interfaces'
import { ThemeContext } from '../Providers/ThemeProvider/ThemeProvider'
import { useSelector } from 'react-redux'
import { BG, Color, Flex, Padding, PaddingHorizontal, Width } from '../Assets'
import { ETextType } from '../Enum/Enum'
import { Text } from '../Atoms'

const ModalTest = (props: any, ref: Ref<RefType | undefined>) => {
    const theme = useContext(ThemeContext)
    const { data } = useSelector((state: RootState) => state.modal)
    const contentStyle = {
        ...Width.full,
        ...Padding.p24,
        ...BG(theme).commonWhite,
        ...Flex.center,
        borderTopRightRadius: 20,
        borderTopLeftRadius: 20
    }

    const containerStyle = {
        ...PaddingHorizontal.p1,
        ...Flex.justifyEnd,
        ...Width.full,
    }

    return (
        <Modal
            ref={ref}
            onExit={props.onExit}
            withSubmitAction
            animationType="fade"
            contentStyle={contentStyle}
            transparent={true}
            containerStyle={containerStyle}
        >
            <Text type={ETextType.subTitle1} textStyle={Color(theme).commonBlack}>
                this is a test
            </Text>
        </Modal>

    )
}

export default forwardRef(ModalTest)