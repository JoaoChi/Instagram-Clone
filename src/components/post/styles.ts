import { Dimensions, StyleSheet } from "react-native";

export const s = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: "#bbb"
    },
    image: {
        width: Dimensions.get('window').width,
        height: Dimensions.get('window').width * 3 / 4,
        resizeMode: 'contain',
    }
})