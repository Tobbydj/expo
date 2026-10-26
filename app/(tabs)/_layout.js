import { Tabs } from "expo-router";
import { IocIcons} from "@expo/vector-icons"


export default function TabsLayout() {
    return (
        <Tabs 
          screenOptions={{
               headerShown: false, 
               tabBarShowLabel: false,
               tabBarActiveTintColor: "#007AFF",
               tabBarInactiveTintColor: "grey"
            }}
            >
           <Tabs.Screen 
              name="index"
              options={{
                  title : "Home",
                  tabBarIcons: ({Color,  focused, size})=>{
                       <IocIcons
                          name={focused ? "home": "home-outline"}
                          size={size}
                          Color={Color}
                       />
                  }
              }}  
              />
           <Tabs.Screen 
             name="task" 
            options={{
                  title : "Tasks",
                  tabBarIcons: ({Color,  focused, size})=>{
                       <IocIcons
                          name={focused ? "checkbox": "checkbox-outline"}
                          size={size}
                          Color={Color}
                       />
                  }
              }}  
           />
           <Tabs.Screen 
           name="profile"

           options={{
                  title : "Profile",
                  tabBarIcons: ({Color,  focused, size})=>{
                       <IocIcons
                          name={focused ? "person": "person-outline"}
                          size={size}
                          Color={Color}
                       />
                  }
              }}  
           />
        </Tabs>
    )
}


