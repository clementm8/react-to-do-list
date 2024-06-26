'use server'

import { ref, set, push } from "firebase/database"
import { db } from "@/lib/firebase/firebaseInit"
import {revalidatePath} from 'next/cache'


export async function addAction(prevState, formData){
    const todo= formData.get('task')
    const category= formData.get('category')
    const newTask={
        todo,
        category
    }
    const response= await addTask(newTask)
    revalidatePath('/demo')
    return {message: response}
}

async function addTask(task){
    const rootPath= ref(db)
    const key= push(rootPath).key
    const path= `todos/${key}`
    try {
        await set(ref(db,path), task)
        return 'success'
    } catch (error) {
        
    }
}