import { View } from "react-native";
import { Header } from "../components/header";
import { Post } from "../components/post";
import { s } from "./home/styles";

export default function Main(){
    return (
        <View style={s.container}>
        <Header />
        <Post source={require("@/src/assets/image1.jpeg")}/>
        </View>
    )
}
