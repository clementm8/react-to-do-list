'use server'

import { ref, remove } from "firebase/database"
import { db } from "@/lib/firebase/firebaseInit"
import {revalidatePath} from 'next/cache'


export async function deleteAction(uid,prevState, formData){
    const response= await deleteTask(uid)
    revalidatePath('/demo')
    return {message: response}
}

async function deleteTask(uid){
    const rootPath= ref(db)
    const path= `todos/${uid}`
    try {
        await remove(ref(db,path), uid)
        return 'success'
    } catch (error) {
        
    }
}