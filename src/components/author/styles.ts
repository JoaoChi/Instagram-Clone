import { StyleSheet } from "react-native";

export const s = StyleSheet.create({
    container: {
        flexDirection: "row",
        alignItems: "center",
        gap: 10,
        margin: 10
    },
    text: {
        color: "#444",
        marginVertical: 10,
        fontSize: 16,
        fontWeight: 'bold',

    },
    avatar: {
        width: 30,
        height: 30,
        borderRadius: 15,
        marginHorizontal: 10
    }
})