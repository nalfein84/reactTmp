import React, { useImperativeHandle, useState, Ref, useContext } from 'react'
import { Modal as ModalReactNative, TouchableOpacity, View } from 'react-native';
import { IModal, RefType, RootState } from '../../Interfaces';
import { Button } from '../../Atoms';
import { BG, Flex, PaddingBottom, Width } from '../../Assets';
import { ThemeContext } from '../../Providers/ThemeProvider/ThemeProvider';
import { LangContext } from '../../Providers';
import { useDispatch, useSelector } from 'react-redux';
import { closeModal } from '../../Redux/Reducers/ModalReducer/ModalReducer';
import { DefaultModalProps } from '../../DefaultProps';
import { EButtonType, EFlexDirection, } from '../../Enum/Enum';

const Modal = React.forwardRef((props: IModal, ref: Ref<RefType | undefined | null>): JSX.Element => {
    const theme = useContext(ThemeContext)
    const lang = useContext(LangContext)
    const dispatch = useDispatch()
    const [open, setOpen] = useState<boolean>(false)

    const { data } = useSelector((state: RootState) => state.modal)

    const onClose = () => {
        setOpen(false)
        dispatch(closeModal())
        if (props.btnResetProps?.onPress) {
            props.btnResetProps?.onPress
        }
    };

    const containerStyle = {
        ...Flex.flex1,
        ...BG(theme).modalGray,
        ...Flex.center,
    }

    const onOpen = () => {
        setOpen(true)
    };

    useImperativeHandle(ref, () => ({
        onClose,
        onOpen,
    }));

    const renderButton = () => {
        if (props.withSubmitAction && props.withCloseAction) {
            let styleBtnContainer
            let styleContainerBtnSubAndClose = { ...props.styleContainerBtnSubAndClose }
            if (props?.btnSubAndCloseContainerDirection === EFlexDirection.columnReverse) {
                styleBtnContainer = { ...Width.full }
                styleContainerBtnSubAndClose = { ...styleContainerBtnSubAndClose, }
            } else {
                styleContainerBtnSubAndClose = { ...styleContainerBtnSubAndClose, ...Flex.row }
            }

            return (
                <View style={styleContainerBtnSubAndClose}>
                    <View style={styleBtnContainer}>
                        <Button
                            type={EButtonType.secondaryBtn}
                            text={lang.cancel}
                            onPress={onClose}
                            {...props.btnResetProps}
                        />
                    </View>
                    <View style={styleBtnContainer}>
                        <Button
                            type={EButtonType.primaryBtn}
                            isLeftIcon={false}
                            {...props.btnSubmitProps}
                        />
                    </View>
                </View>
            )
        }
        else if (props.withSubmitAction) {
            return (
                <View style={{ ...Width.full, ...props.styleBtnSubmit }}>
                    <Button
                        type={EButtonType.primaryBtn}
                        {...props.btnSubmitProps}
                    />
                </View>
            )
        }
        else if (props.withCloseAction) {
            return (
                <View style={Flex.center}>
                    <Button
                        onPress={onClose}
                        {...props.btnResetProps}
                    />
                </View>
            )
        }
        else return null
    }
    const renderModalBody = () => {
        if (props?.modalFromBottom && props?.diffSize) {
            return (<>
                <TouchableOpacity activeOpacity={1} style={{ ...Width.full, ...BG(theme).modalGray, height: props?.diffSize + 30 }} onPress={onClose} />
                <View style={{ ...containerStyle, ...props.containerStyle }}>
                    <View style={props.contentStyle}>
                        <View style={{
                            ...Flex.flexGrow1,
                            ...props.styleWrapChildren,
                            ...BG(theme).commonWhite,
                            ...PaddingBottom.p10,
                            borderTopRightRadius: 40,
                            borderTopLeftRadius: 40,
                        }} >
                            {props.children}
                        </View>
                        {renderButton()}
                    </View>
                </View>
            </>
            )
        }
        return (
            <TouchableOpacity activeOpacity={0.3} style={{ ...containerStyle }} onPress={onClose}>
                <View style={{ ...containerStyle, ...props.containerStyle }}>
                    <View style={props.contentStyle}>
                        <View style={{ ...Flex.flexGrow1, ...props.styleWrapChildren }}
                            onStartShouldSetResponder={(event) => true}
                            onTouchEnd={(e) => { e.stopPropagation() }}>
                            {props.children}
                        </View>
                        {renderButton()}
                    </View>
                </View>
            </TouchableOpacity>
        )
    }
    return (
        <ModalReactNative
            visible={open}
            transparent={props.transparent}
            onRequestClose={onClose}
            style={props.style}
            animationType={props.animationType}
            onShow={props.onShow}
        >
            {renderModalBody()}
        </ModalReactNative>
    )
})

Modal.defaultProps = {
    ...DefaultModalProps
}

export default Modal
