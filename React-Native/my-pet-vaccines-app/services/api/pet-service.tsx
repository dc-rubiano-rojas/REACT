import { addDoc, collection, doc, getDoc, getDocs, query, updateDoc, where } from "firebase/firestore";
import { ref, uploadBytesResumable, getDownloadURL } from 'firebase/storage'

import { FIRESTORE_DB } from "../../../firebaseConfig";
import { Pet } from "../../utils/types";

export async function addPetService(pet: Pet, uid: string) {
    const data = await addDoc(collection(FIRESTORE_DB, 'pets'), { ...pet, uid: [uid] })
    return data.id
}

export async function saveImagePetService(pet: Pet, uid: string) {

}


export async function getPetService(pid: string) {
    try {

        const ref = doc(FIRESTORE_DB, `pets/${pid}`)
        const data = await getDoc(ref);

        return data
    } catch (error) {
        console.log('====================================');
        console.log('error - getPetService');
        console.log(error);
        console.log('====================================');
    }
}
export function getPet(id: string) {

}
export async function updatePetService(pet: Pet) {
    try {
        const ref = doc(FIRESTORE_DB, `pets/${pet.pid}`)
        delete pet.pid
        await updateDoc(ref, { ...pet })
    } catch (error) {
        console.log('====================================');
        console.log('error - getPetService');
        console.log(error);
        console.log('====================================');
    }
}
export function deletePet(id: string) {

}