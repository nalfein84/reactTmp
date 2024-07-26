import { StyleSheet } from "react-native";

const Shadow = StyleSheet.create({
    primary: {
        shadowOffset: { width: 0, height: 4 },
        shadowOpacity: 0.15,
        shadowRadius: 24,
        shadowColor: "#000",
        elevation: 5,
    },
})

export { Shadow }
