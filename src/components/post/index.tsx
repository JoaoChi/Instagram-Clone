import { View, Image, Dimensions, ImageSourcePropType  } from "react-native";
import { s } from "./styles";
import { Author } from "../author";
import { Comment } from "../comments";

type PostProps = {
    source: ImageSourcePropType
    comments: CommentType;
}

type CommentType = Record<string, { nick: string; text: string }>;

export function Post({ source, comments }: PostProps) {
    return (
        <View style={s.container}>
            <Author email="joao@" autor="joao"/>
            <Image source={source} style={s.image}/>
            <Comment comments={comments}/>
        </View>
    )
}