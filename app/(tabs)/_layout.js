import { Tabs } from "expo-router";

export default function TabsLayout() {
    return (
        <Tabs screenOptions={{ headerShown: false, tabBarShowLabel: false }}>
           <Tabs.Screen name="index" />
           <Tabs.Screen name="task" />
           <Tabs.Screen name="profile" />
        </Tabs>
    )
}