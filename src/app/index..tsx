import { View } from "react-native";
import { Header } from "../components/header";
import { Post } from "../components/post";
import { s } from "./home/styles";

export default function Main(){

    const commentsData = {
        "1": { nick: "Maria", text: "Ótima foto!" },
        "2": { nick: "Pedro", text: "Muito bonita!" },
        "3": { nick: "Ana", text: "Onde foi tirada?" },
    };

    return (
        <View style={s.container}>
        <Header />
        <Post comments={commentsData} source={require("@/src/assets/image1.jpeg")}/>
        </View>
    )
}
