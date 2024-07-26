import { StyleSheet } from "react-native";
import { IKeys } from "../../Interfaces";

const BG = (theme: IKeys) => StyleSheet.create({
    primary: {
        backgroundColor: theme.primary
    },
    appGradiant: {
        backgroundColor: theme.appGradiant
    },
    gray: {
        backgroundColor: theme.grisPomelo
    },
    chasingPurple: {
        backgroundColor: theme.chasingPurple
    },
    commonWhite: {
        backgroundColor: theme.commonWhite
    },
    modalGray: {
        backgroundColor: theme.modalGray
    },
})
export { BG }
