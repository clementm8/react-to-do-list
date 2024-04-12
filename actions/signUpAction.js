'use server'

import { redirect } from 'next/navigation'

import { createUserWithEmailAndPassword } from "firebase/auth"

import { auth } from "@/lib/firebase/firebaseInit"

export async function signUpAction(formData) {
    const email = formData.get('email')
    const password = formData.get('password')
    createUserWithEmailAndPassword(auth, email, password)
        .then((userCredential) => {
            const user = userCredential.user
            console.log(user)
        })
        .catch(error => {
            const errorCode = error.code
            const errorMessage = error.message
            console.log(errorCode, errorMessage)
            return
        })
        redirect('/demo')
}