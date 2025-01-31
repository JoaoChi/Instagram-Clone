import { View, Image, Dimensions, ImageSourcePropType  } from "react-native";
import { s } from "./styles";

type ImageProps = {
    source: ImageSourcePropType
}

export function Post({ source }: ImageProps) {
    return (
        <View style={s.container}>
            <Image source={source} style={s.image}/>
        </View>
    )
}