import { View, Image, Dimensions, ImageSourcePropType  } from "react-native";
import { s } from "./styles";
import { Author } from "../author";
import { Comment } from "../comments";
import { AddComment } from "../addComment";

type PostProps = {
    source: ImageSourcePropType
    comments: CommentType
    id: string
    autor: string
    email: string
}

type CommentType = Record<string, { autor: string; text: string }>;

export function Post({ id, source, comments, autor, email }: PostProps) {
    return (
        <View style={s.container}>
            <Author email={email} autor={autor}/>
            <Image source={source} style={s.image}/>
            <Comment comments={comments}/> 
        </View>
    )
}