import { StyleSheet } from "react-native";
import { PaddingBottom } from "../abstracts/padding";
import { Shadow } from "../abstracts/shadow";
import { BorderRadius } from "../abstracts/borderRadius";
import { Container } from "../abstracts/container";

const BottomNavigationStyle = StyleSheet.create({
    bottomNavigationStyle: {
        height: 88,
        ...PaddingBottom.p16,
        ...Shadow.primary,
        ...Container.absolute,
        borderWidth: 0,
    }
})
export { BottomNavigationStyle }