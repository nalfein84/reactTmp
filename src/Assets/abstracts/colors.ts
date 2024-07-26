import { IKeys } from "../../Interfaces/Common";

const commonColor: IKeys = {
    commonWhite: '#FFFFFF',
    commonBlack: '#000000',
    activeColor: '#DE5E69',
    deactiveColor: '#DE5E6950',
    boxActiveColor: '#DE5E6940',
    modalGray: 'rgba(0,0,0,0.5)',
    success1: "#16a34a",
    error1: "#dc2626",
    primary: '#7A00E6',
    gray: 'rgba(0, 0, 0, 0.5)',
    backgroundApp: '#F5F5F5',
};

const light: IKeys = {
    ...commonColor
};

const dark: IKeys = {
    ...commonColor
};

export { light, dark, commonColor };
