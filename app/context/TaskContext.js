import { createContext, useContext, useEffect, useState } from "react";

import AsyncStorage from "@react-native-async-storage/async-storage"


const TaskContext = createContext(null)
const storage =  "taskflow.task.v1"

export function TaskProvider({children}){

    const [task,setTask]=useState([])
    const [isLoading,setIsLoading]=useState(false)

    return(
        <TaskContext.Provider>
            {children}
        </TaskContext.Provider>
    )
}