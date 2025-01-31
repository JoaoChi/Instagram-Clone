import { StyleSheet } from "react-native";

export const s = StyleSheet.create({
    container: {
        padding: 10,
    },
    title: {
        fontSize: 16,
        fontWeight: "bold",
        marginBottom: 10,
    },
    inputContainer: {
        flexDirection: "row",
        alignItems: "center",
        marginBottom: 10,
    },
    input: {
        flex: 1,
        borderWidth: 1,
        borderColor: "#ccc",
        borderRadius: 8,
        padding: 10,
    },
    button: {
        backgroundColor: "#007BFF",
        padding: 10,
        borderRadius: 22,
        marginLeft: 10,
    }
})