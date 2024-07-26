import { StyleSheet } from "react-native";
import { IKeys } from "../../Interfaces";

const Color = (theme: IKeys) => StyleSheet.create({
    primary: {
        color: theme.primary
    },
    commonBlack: {
        color: theme.commonBlack
    },
    black: {
        color: theme.commonBlack
    },
    gray: {
        color: theme.gray
    },
    white: {
        color: theme.commonWhite
    },
})

export { Color }
