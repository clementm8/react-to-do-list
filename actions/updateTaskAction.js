'use server'

import { ref, update } from "firebase/database"
import { db } from "@/lib/firebase/firebaseInit"
import {revalidatePath} from 'next/cache'


export async function updateAction(prevState, formData){
    const todo= formData.get('todo')
    const category= formData.get('category')
    const uid= formData.get('uid')
    const newObj={
        todo,
        category,
    }

    const response= await editTask(newObj, uid)
    revalidatePath('/demo')
    return{message: response}
}

async function editTask(todo, uid){
    const path= `todos/${uid}`
    const dbRef= ref(db,path)
    try {
        await update(dbRef, todo)
        return 'success'
    } catch (error) {
        return 'failure'
    }
}