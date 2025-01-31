import { View, Text } from "react-native";
import { IconBrandInstagram } from "@tabler/icons-react-native"
import { s } from "./styles";

export function Header() {
    return (
        <View style={s.container}>
            <View style={s.rowContainer}>
                <IconBrandInstagram style={s.Icon} size={30} color={"#000"}/>
                <Text style={s.Text}>Instragam</Text>
            </View>
        </View>
    )
}