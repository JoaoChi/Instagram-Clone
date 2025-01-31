import { View, Text } from "react-native";
import { s } from "./styles";

type CommentProps = {
    comments: Record<string, { autor: string; text: string }>;
};

export function Comment({ comments }: CommentProps) {
    return (
        <View style={s.container}>
            {Object.entries(comments).map(([key, { autor, text }]) => (
                <View key={key} style={s.commentContainer}>
                    <Text style={s.nick}>{autor}:</Text>
                    <Text style={s.comment}>{text}</Text>
                </View>
            ))}
        </View>
    );
}
