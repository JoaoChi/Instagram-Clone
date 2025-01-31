import { View, Text } from "react-native";
import { s } from "./styles";

type CommentProps = {
    comments: Record<string, { nick: string; text: string }>;
};

export function Comment({ comments }: CommentProps) {
    return (
        <View style={s.container}>
            {Object.entries(comments).map(([key, { nick, text }]) => (
                <View key={key} style={s.commentContainer}>
                    <Text style={s.nick}>{nick}:</Text>
                    <Text style={s.comment}>{text}</Text>
                </View>
            ))}
        </View>
    );
}
