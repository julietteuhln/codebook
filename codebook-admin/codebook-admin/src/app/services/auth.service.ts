import { Injectable } from '@angular/core';
import { Auth, signInWithEmailAndPassword, signOut, User, onAuthStateChanged } from '@angular/fire/auth';

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  constructor(private auth: Auth) {}

  // Method to sign in with email and password
  signIn(email: string, password: string): Promise<User | null> {
    return signInWithEmailAndPassword(this.auth, email, password)
      .then(userCredential => userCredential.user)
      .catch(error => {
        console.error('Error during sign in', error);
        return null;
      });
  }

  // Method to sign out
  signOut(): Promise<void> {
    return signOut(this.auth)
      .catch(error => {
        console.error('Error during sign out', error);
      });
  }

  // Method to get the currently signed-in user
  getCurrentUser(): Promise<User | null> {
    return new Promise((resolve) => {
      const unsubscribe = onAuthStateChanged(this.auth, (user) => {
        resolve(user);
        unsubscribe();  // Unsubscribe after first value is received
      });
    });
  }
}
