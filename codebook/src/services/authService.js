import { getAuth, createUserWithEmailAndPassword, signInWithEmailAndPassword, signOut, onAuthStateChanged } from "firebase/auth";
import { auth } from '../firebaseConfig'; 

export async function signUp(email, password) {
    try {
        const userCredential = await createUserWithEmailAndPassword(auth, email, password);
        return userCredential.user;
    } catch (error) {
        console.error("Failed to sign up:", error);
        throw new Error(error.message);
    }
};


export async function signIn(email, password) {
    try {
        const userCredential = await signInWithEmailAndPassword(auth, email, password);
        return userCredential.user;
    } catch (error) {
        console.error("Failed to sign in:", error);
        throw new Error(error.message);
    }
}

export async function signOutUser() {
    try {
        await signOut(auth);
        return "Déconnexion réussie";
    } catch (error) {
        console.error("Failed to sign out:", error);
        throw new Error(error.message);
    }
}

export function onAuthStateChangedListener(callback) {
    return onAuthStateChanged(auth, user => {
        callback(user);
    });
}

export function getCurrentUser() {
    return auth.currentUser;
}
