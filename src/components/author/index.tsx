import React from "react";
import Gravatar from '@krosben/react-native-gravatar';
import { View, Text } from "react-native";
import { s } from "./styles";

type AuthorProps = {
    email: string,
    autor: string
}

export function Author({email, autor}: AuthorProps) {
    return (
        <View style={s.container}>
            <Gravatar email={email} style={s.avatar} />
            <Text style={s.text}>{autor}</Text>
        </View>
    )
}