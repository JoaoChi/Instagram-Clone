import { StyleSheet } from "react-native";

export const s = StyleSheet.create({
    container: {
        flex: 1,
        margin: 10,
    },
    comment: {
        color: "#555"
    },
    nick: {
        marginLeft: 5,
        fontWeight: "bold",
        color: "#444"
    },
    commentContainer: {
        flexDirection: "row",
        marginTop: 5,
        gap: 10
    }
})