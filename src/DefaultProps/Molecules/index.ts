import { commonColor } from "../../Assets"

import { DefaultTextProps } from "../Atoms"

const DefaultLisProps = {
    withSectionList: false
}

const DefaultCardProps = {
    onPress: () => { return },
    width: 50,
    height: 50,
    radius: 50,
    styleCard: {},
    imageSrc: "",
    styleImg: {},
    containerTitleStyle: {},
    title: "",
    titleProps: DefaultTextProps,
    descriptionStyle: {},
}

const DefaultMeleculeInputProps = {
    showsVerticalScrollIndicator: false,
    isSelect: false,
    activeItemStyle: {
        color: commonColor.commonBlack
    },
    itemsStyle: {
        color: commonColor.gray,
        fontSize: 13.7,
        lineHeight: 22,
    },
    itemContainerDropdownStyle: {},
    data: [],
    valueField: "value",
    labelField: "label"
}

const DefaultModalProps = {
    children: null,
    transparent: false,
    style: {},
    onShow: () => { return },
    contentStyle: {},
    withCloseIcon: true,
    //btnSubmitProps: { ...DEFAULTBUTTONPROPS, text: "Submit", type: Type.primary },
    //btnResetProps: { ...DEFAULTBUTTONPROPS, text: "Close", type: Type.secondary, onClick: null },
    onExit: () => { return },
    onShowFunc: () => { return },
}

const DefaultHeaderCreationProps = {
    headerStyle: {},
    title: "",
    goBack: () => { },
    isTitle: true,
    colorBell: "black"
}

const DefaultConductorSelect = {
    name: "Ayoub yaich",
    status: "en attente",
    date: "08h08",
    acceptedUser: 2,
    isChecked: false,
    onCheck: () => { },
    co2: "0,13",
    onClickTrackDetails: () => { },
    fullTrack: false,
    isComplete: false,
    isConductor: false
}

export {
    DefaultLisProps,
    DefaultCardProps,
    DefaultModalProps,
    DefaultMeleculeInputProps,
    DefaultHeaderCreationProps,
    DefaultConductorSelect,
}
