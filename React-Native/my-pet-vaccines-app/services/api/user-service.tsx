import { addDoc, collection, getDocs, query, updateDoc, where, doc } from "firebase/firestore";

import { FIRESTORE_DB } from "@/firebaseConfig";
import { createUserWithEmailAndPassword, signInWithEmailAndPassword } from "firebase/auth";
import { User, UserToRegister, UserToUpdate } from "../../utils/types";

const db = FIRESTORE_DB

export async function getUser(email = '') {
    try {
        const userRef = collection(FIRESTORE_DB, 'users')
        const messagesCollectionRef = query(userRef, where("email", "==", email));
        return await getDocs(messagesCollectionRef);
        //return data.docs.filter((doc: any) => doc.data().email === email)
    } catch (error: any) {
        console.log('====================================');
        console.log('error: ', { error, message: error.message });
        console.log('====================================');
    }

}

export async function updateUserService(user: UserToUpdate) {
    try {
        const ref = doc(FIRESTORE_DB, `users/${user.uid}`)
        await updateDoc(ref, { ...user })
    } catch (error: any) {
        console.log('====================================');
        console.log('error: ', { error, message: error.message });
        console.log('====================================');
        throw new Error('Error trying to singin')
    }
}

export async function login(email: string, password: string) {
    try {
        const userRef = collection(FIRESTORE_DB, 'users')
        const messagesCollectionRef = query(userRef, where("email", "==", email));
        const data = await getDocs(messagesCollectionRef);
        const exist = data.docs.filter((doc: any) => doc.data().email === email)
/*         if (exist) {
            const response = await signInWithEmailAndPassword(auth, email, password)
            return response
        } */
    } catch (error: any) {
        console.log('====================================');
        console.log('error: ', { error, message: error.message });
        console.log('====================================');
        throw new Error('Error trying to singin')
    }
}

export async function registerUserService(data: any) {
    try {
       // const myAuth = FIREBASE_AUTH

        //const response = await createUserWithEmailAndPassword(FIREBASE_AUTH, data.Email, data.Password)
        //const userToSave: User = response.user.providerData[0]
        await addDoc(collection(FIRESTORE_DB, 'users'), { ...data })

    } catch (error: any) {
        console.log(error);
        alert('register in failed: ' + error.message)
    } finally {
    }
}

/* export async function logoutService() {
    return FIREBASE_AUTH.signOut()
} */
