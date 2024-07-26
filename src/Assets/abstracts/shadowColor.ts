import { StyleSheet } from "react-native";
import { IKeys } from "../../Interfaces";

const ShadowColor = (theme: IKeys) => StyleSheet.create({
    primary: {
        shadowColor: theme.shadowColor
    },
})

export { ShadowColor }
