import { View, Text, Pressable, StyleSheet } from "react-native";


export default function HomePage() {

    return (
        <Text style={style.container}>Welcome Home Page</Text>
    )
}



const style = StyleSheet.create({
    container:{
        margin:20,
        marginTop: 120
    }
})