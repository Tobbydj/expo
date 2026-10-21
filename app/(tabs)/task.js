import { View, Text, Pressable, StyleSheet } from "react-native";


export default function TaskPage() {

    return (
        <Text style={style.container}>Welcome Task Page</Text>
    )
}

const style = StyleSheet.create({
    container:{
        margin:20,
        marginTop: 120
    }
})