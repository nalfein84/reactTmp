import { StyleSheet } from "react-native";
import { IKeys } from "../../Interfaces";

const BorderColor = (theme: IKeys) => StyleSheet.create({
    primary: {
        borderColor: theme.commonWhite
    },
    black: {
        borderColor: theme.commonBlack
    },
    error1: {
        borderColor: theme.red
    },
    success1: {
        borderColor: theme.success1
    },
})

export { BorderColor }
