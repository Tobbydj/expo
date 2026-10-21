import { View, Text, Pressable, StyleSheet } from "react-native";


export default function ProfilePage() {

    return (
        <Text style={style.container}>Welcome Profile Page</Text>
    )
}

const style = StyleSheet.create({
    container:{
        margin:20,
        marginTop: 120
    }
})