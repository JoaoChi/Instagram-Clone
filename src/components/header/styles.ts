import { Platform, StyleSheet } from "react-native";

export const s = StyleSheet.create({
    container: {
        marginTop: Platform.OS === "ios" ? 20 : 0,
        padding: 10,
        borderBottomWidth: 1,
        borderColor: "#BBB"
    },
    rowContainer: {
        flexDirection: "row",
        alignItems: "center"
    },
    Icon: {
        width: 30,
        height: 30,
        marginRight: 20,
        resizeMode: "contain"
    },
    Text: {
        fontWeight: "bold",
        color: "#000"
    }
})