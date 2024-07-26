import { StyleSheet } from "react-native";

const Width = StyleSheet.create({
    full: {
        width: "100%"
    },
    half: {
        width: "50%"
    },
    w124: {
        width: 124
    }

})
const Height = StyleSheet.create({
    full: {
        height: "100%"
    },
    h52: {
        height: 52
    }

})
const FontSize = StyleSheet.create({
    ftSz10: {
        fontSize: 10,
    },

})
const LineHeight = StyleSheet.create({
    lineHt16: {
        lineHeight: 16,
    },

})
const FontWeight = StyleSheet.create({
    fontWt400: {
        fontWeight: "400",
    },
    fontWt700: {
        fontWeight: "700",
    },
})


export { Height, Width, FontSize, LineHeight, FontWeight }
