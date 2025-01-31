import { View, Image, Dimensions, ImageSourcePropType  } from "react-native";
import { s } from "./styles";
import { Author } from "../author";

type ImageProps = {
    source: ImageSourcePropType
}

export function Post({ source }: ImageProps) {
    return (
        <View style={s.container}>
            <Author email="joao@" autor="joao"/>
            <Image source={source} style={s.image}/>
        </View>
    )
}