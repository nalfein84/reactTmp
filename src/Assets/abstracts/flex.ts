import { StyleSheet } from "react-native";

const Flex = StyleSheet.create({
    flex1: {
        flex: 1
    },
    row: {
        flexDirection: "row",
    },
    col: {
        flexDirection: "column",
    },
    center: {
        justifyContent: "center",
        alignItems: "center"
    },
    alignItemsCenter: {
        alignItems: "center"
    },
    alignItemsEnd: {
        alignItems: "flex-end"
    },
    spaceBetween: {
        justifyContent: 'space-between',
    },
    justifyCenter: {
        justifyContent: "center",
    },
    justifyEnd: {
        justifyContent: "flex-end",
    },
    justifyStart: {
        justifyContent: "flex-start",
    },
    flexGrow1: {
        flexGrow: 1
    },
})

export { Flex }
