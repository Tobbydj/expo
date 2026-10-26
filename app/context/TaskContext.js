import { createContext, useContext, useEffect, useState } from "react";

import AsyncStorage from "@react-native-async-storage/async-storage"


const TaskContext = createContext(null)
const storage =  "taskflow.task.v1"

export function TaskProvider({children}){

    const [task,setTask]=useState([])
    const [isLoading,setIsLoading]=useState(false)
useEffect(()=>{
    async function load() {
        try{
             const saved =await AsyncStorage.getItem(STORAGE_KEY);
             if (saved) setTasks(JSON.parse(saved));
        } catch (error) {
            console.warn("Task load fail",error);
            

        }finally{
            setIsLoading(true);

        }
    }
    load();

},[]);
useEffect(()=>{
    if (!isLoading) return;
    AsyncStorage.setItem(STORAGE_KEY, JSON.stringify(tasks))
    .catch(error => console.warn("Task save failed", error))
},[task,isLoading]);
  function addTask (title,desciption = "") {
    const task = {
        id: String(Date.now()),
        title:title.trim(),
        decription:description.trim(),
        completed: false,
        createdAt:new Date().toISOString(),

    };
    setTask(current => [task, ...current]);
  }
  function updateTask(id,updates) {
    setTask(current =>
        current.map(task => task.id === id ?{ ...task, ...updates} : task)
    );
  }
  function deleteTask(id){
    setTask(current => current.filter(task =>task.id !==id));
  }
  
    return(
        <TaskContext.Provider value={{task}}>
            {children}
        </TaskContext.Provider>
    )
}