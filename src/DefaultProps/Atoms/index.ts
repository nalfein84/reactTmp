import { Color, commonColor } from "../../Assets"

const DefaultBtnProps = {
    text: "Click",
    isCustom: false,
    activeOpacity: 0.8,
    type: "type-1",
    containerClassName: {},
    isLoading: false,
    loaderColor: '#FFFFFF'
}

const DefaultTextProps = {
    allowFontScaling: false,
    type: 'type-4',
}

const DEFAULTICONPROPS = {
    name: 'check1',
    style: {},
    size: 12,
    color: "black",
    onClick: () => { return }
}

const DEFAULTInputProps = {
    withLabel: true,
    label: 'Useless Label',
    labelType: 'type-input-label-1',
    iconProps: { size: 18, name: "x1", color: commonColor.primary },
    withIcon: false,
    placeholderTextColor: commonColor.grisPomelo,
    styleExternalContainer: {}
}

const DEFAULTAppContainerProps = {
    paddingBottom: 40,
    style: {},
    containerStyle: {}
}

const DEFAULTCheckBoxProps = {
    type: "type-1",
    size: 24,
    setCheckboxState: () => { },
    isChecked: false
}
const DEFAULTAvatarProps = {
    ownerName: 'sanofi',
    ownerLastName: 'dollycar',
    avatarURI: '',
    nameTextType: 'avatar-type-1',
    styleImage: {},
    styleContainer: {}
}
const DEFAULTToggleProps = {
    widthContainer: 54,
    heightContainer: 24,
    widthSquare: 18,
    heightSquare: 18,
    padding: 2
}

export {
    DEFAULTICONPROPS,
    DefaultBtnProps,
    DefaultTextProps,
    DEFAULTInputProps,
    DEFAULTAppContainerProps,
    DEFAULTCheckBoxProps,
    DEFAULTAvatarProps,
    DEFAULTToggleProps
}
