import { StyleSheet } from "react-native";
import { generateStyles } from "../../Functions/Common";

const Margin = StyleSheet.create({
    ...generateStyles({ start: 1, end: 100, property: "margin", key: "m" })
});

const MarginBottom = StyleSheet.create({
    ...generateStyles({ start: 1, end: 100, property: "marginBottom", key: "m" })
});

const MarginRight = StyleSheet.create({
    ...generateStyles({ start: 1, end: 100, property: "marginRight", key: "m" })
});

const MarginLeft = StyleSheet.create({
    ...generateStyles({ start: 1, end: 100, property: "marginLeft", key: "m" })
});

const MarginTop = StyleSheet.create({
    ...generateStyles({ start: 1, end: 100, property: "marginTop", key: "m" })
});

const MarginVertical = StyleSheet.create({
    ...generateStyles({ start: 1, end: 100, property: "marginVertical", key: "m" })
});

const MarginHorizontal = StyleSheet.create({
    ...generateStyles({ start: 1, end: 100, property: "marginHorizontal", key: "m" })
});


export { Margin, MarginBottom, MarginHorizontal, MarginLeft, MarginRight, MarginTop, MarginVertical }
