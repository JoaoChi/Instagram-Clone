import { View } from "react-native";
import { Header } from "../components/header";
import { Post } from "../components/post";
import { s } from "./home/styles";
import { AddComment } from "../components/addComment";
import { useState } from "react";

export default function Main(){

    const [comments, setComments] = useState<Record<string, { autor: string; text: string }>>({
        "1": { autor: "Maria", text: "Ótima foto!" },
        "2": { autor: "Pedro", text: "Muito bonita!" },
        "3": { autor: "Ana", text: "Onde foi tirada?" },
    });

    const addComment = (newComment: string) => {
        if (newComment.trim().length === 0) return;

        const newCommentId = new Date().getTime().toString(); 

        setComments(prevComments => ({
            ...prevComments,
            [newCommentId]: { autor: "Usuário", text: newComment }
        }));
    };

    return (
        <View style={s.container}>
        <Header />
        <AddComment newComment={addComment}/>
        </View>
    )
}
