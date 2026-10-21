import { useLocalSearchParams } from "expo-router";
import { Text, View } from "react-native";

export default function TaskDetailsPage() {
    const { id } = useLocalSearchParams();

    return (
        <View>
            <Text>Task details</Text>
            {id != null && <Text>Task ID: {id}</Text>}
        </View>
    );
}