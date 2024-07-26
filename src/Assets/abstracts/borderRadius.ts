import { StyleSheet } from "react-native";
import { generateStyles } from "../../Functions/Common";

const BorderRadius = StyleSheet.create({
    ...generateStyles({ start: 1, end: 100, property: "borderRadius", key: "br" })
})
const BorderWidth = StyleSheet.create({
    BrW1: {
        borderWidth: 1
    },
    BrW2: {
        borderWidth: 2
    },
    BrW3: {
        borderWidth: 3
    }
})
export { BorderRadius, BorderWidth }
