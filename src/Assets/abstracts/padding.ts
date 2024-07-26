import { StyleSheet } from "react-native";
import { generateStyles } from "../../Functions/Common";

const Padding = StyleSheet.create({
    ...generateStyles({ start: 1, end: 100, property: "padding" })
});

const PaddingBottom = StyleSheet.create({
    ...generateStyles({ start: 1, end: 100, property: "paddingBottom" })
});

const PaddingRight = StyleSheet.create({
    ...generateStyles({ start: 1, end: 100, property: "paddingRight" })
});

const PaddingLeft = StyleSheet.create({
    ...generateStyles({ start: 1, end: 100, property: "paddingLeft" })
});

const PaddingTop = StyleSheet.create({
    ...generateStyles({ start: 1, end: 100, property: "paddingTop" })
});

const PaddingVertical = StyleSheet.create({
    ...generateStyles({ start: 1, end: 100, property: "paddingVertical" })
});

const PaddingHorizontal = StyleSheet.create({
    ...generateStyles({ start: 1, end: 100, property: "paddingHorizontal" })
});

export {
    Padding, PaddingBottom, PaddingHorizontal, PaddingLeft, PaddingRight, PaddingTop, PaddingVertical
};
