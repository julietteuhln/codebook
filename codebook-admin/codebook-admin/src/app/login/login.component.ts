import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { Router, RouterModule } from '@angular/router';
import { AuthService } from '../services/auth.service';
import { User } from 'firebase/auth';
import { UserCredentials } from '../type';
import { provideAuth } from '@angular/fire/auth';
import { getAuth } from 'firebase/auth';

@Component({
  standalone: true,
  selector: 'app-login',
  imports: [ FormsModule ],
  templateUrl: './login.component.html',
  styleUrl: './login.component.css',
})
export class LoginComponent {

  title ='loginForm'

  user = {
    username: '',
    password: '',
    rememberMe: false
  };

  constructor(private authService: AuthService, private router: Router) { }

  async logIn() {
    if (!this.user.username || !this.user.password) {
      alert('Veuillez remplir tous les champs.');
      return;
    }

    try {
      const user = await this.authService.signIn(this.user.username, this.user.password);
      if (user) {

        alert('Connexion réussie.');
        await this.router.navigate(['/dashboard']);
        sessionStorage.setItem('user', JSON.stringify(user));

      } else {
        alert('Identifiants invalides.');
      }

    } catch (error) {
      console.error('Login error:', error);
      alert('erreur lors de la connexion');
    }
  }
}
