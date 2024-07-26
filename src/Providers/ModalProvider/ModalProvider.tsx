import { useEffect, useRef, useState } from "react"
import { useSelector, useDispatch } from "react-redux"
import React from "react"
import { RefType, RootState } from "../../Interfaces"
import { closeModal } from "../../Redux/Reducers/ModalReducer/ModalReducer"
import { EModalName } from "../../Enum/Enum"
import { ModalTest } from "../../Modal"


function ModalProvider() {
    const { name, data } = useSelector((state: RootState) => state?.modal)
    const modalName = useRef("")
    const ModalTestRef = useRef<RefType>()
    const dispatch = useDispatch()
    const onExit = (key: EModalName | undefined) => {
        switch (key) {
            case EModalName.modalTest:
                ModalTestRef.current?.onClose()
                break
            default:
                break
        }
        dispatch(closeModal())
        modalName.current = ""
    }
    const onShow = (key: EModalName) => {
        modalName.current = key
        switch (key) {
            case EModalName.modalTest:
                ModalTestRef.current?.onOpen()
                break
            default:
                break
        }
    }
    useEffect(() => {
        switch (name) {
            case EModalName.modalTest:
                onShow(EModalName.modalTest)
                break;
            default:
                break;
        }
    }, [name])
    const renderModal = () => {
        switch (name) {
            case EModalName.modalTest:
                return <ModalTest
                    ref={ModalTestRef}
                    data={data}
                    onExit={() => onExit(EModalName.modalTest)}
                    onShow={() => onShow(EModalName.modalTest)}
                />
            default:
                return null;
        }
    };
    return (
        renderModal()
    )
}
export default ModalProvider
