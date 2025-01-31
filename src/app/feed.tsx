import { useState } from "react";
import { Header } from "../components/header";
import { Post } from "../components/post";
import { View, FlatList } from "react-native";
import { s } from "./feed/styles";
import { AddComment } from "../components/addComment";

export default function Feed() {
    const [posts, setPosts] = useState<Record<string, {
        id: string;
        autor: string;
        email: string;
        image: any;
        comments: Record<string, { autor: string; text: string }>;
    }>>({
        "1": {
            id: Math.random().toString(),
            autor: "Maria",
            email: "maria@example.com",
            image: require("@/src/assets/image2.jpeg"),
            comments: {
                "1": { autor: "Pedro", text: "Ótima foto!" },
                "2": { autor: "Ana", text: "Muito bonita!" },
            }
        },
        "2": {
            id: Math.random().toString(),
            autor: "Pedro",
            email: "pedro@example.com",
            image: require("@/src/assets/image3.jpeg"),
            comments: {
                "1": { autor: "Maria", text: "Adorei o lugar!" },
                "2": { autor: "Lucas", text: "Que paisagem!" },
            }
        },
    });

    const newComment = (postId: string, comment: string) => {
        setPosts((prevPosts) => {
            const updatedPosts = { ...prevPosts };
            const post = updatedPosts[postId];
            const newCommentId = Math.random().toString();
            post.comments[newCommentId] = { autor: "Usuário", text: comment };
            return updatedPosts;
        });
    };

    return (
        <View style={s.container}>
            <Header />
            <FlatList
                data={Object.values(posts)}
                keyExtractor={(item) => item.id}
                renderItem={({ item }) => (
                    <View>
                        <Post
                            id={item.id}
                            autor={item.autor}
                            email={item.email}
                            source={item.image}
                            comments={item.comments}
                        />
                        <AddComment
                            newComment={(comment: string) => newComment(item.id, comment)}
                        />
                    </View>
                )}
            />
        </View>
    )
}