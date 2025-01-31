import { View, Text, TextInput, TouchableOpacity } from "react-native";
import { IconPlus } from "@tabler/icons-react-native";
import { useState } from "react";
import { s } from "./styles";

type AddCommentProps = {
    newComment: (comment: string) => void;
};

export function AddComment({ newComment }: AddCommentProps) {
    const [comment, setComment] = useState("");

    const handleAddComment = () => {
        if (comment.trim().length === 0) return; 
        newComment(comment); 
        setComment(""); 
    };

    return(
        <View style={s.container}>
            <Text style={s.title}>Adicione um comentário:</Text>
            <View style={s.inputContainer}>
                <TextInput
                    style={s.input}
                    placeholder="Digite seu comentário..."
                    value={comment}
                    onChangeText={setComment}
                />
                <TouchableOpacity onPress={handleAddComment} style={s.button}>
                    <IconPlus size={24} color="black" />
                </TouchableOpacity>
            </View>
        </View>
    );
}
