import React, { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { signIn } from '../services/authService';  
import { useTitle } from '../hooks/useTitle';

export default function Login() {

    useTitle("login");

    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [error, setError] = useState(null);
    const [loader, setLoader] = useState(false);
    const [rememberMe, setRememberMe] = useState(false);
    const navigate = useNavigate();

    useEffect(() => {
        const token = JSON.parse(localStorage.getItem("token") || sessionStorage.getItem("token"));
        if (token) {
            navigate('/dashboard');
        }
    }, [navigate])

    const logIn = async (e) => {
        e.preventDefault();
        setLoader(true);
        setError(null);

        try {
            const token = await signIn(email, password);
            if (rememberMe) {
                localStorage.setItem('token', JSON.stringify(token));
            } else {
                sessionStorage.setItem("token", JSON.stringify(token));
            }
            navigate('/dashboard');
        } catch (err) {
            setError(err);
        } finally {
            setLoader(false);
        }
    }

  return (
    <section>
    <div class="container">
        <div class="card bg-base-100 mx-auto bg-neutral shadow-xl w-96">
            <h3 class="card-title mx-auto py-3">Connexion</h3>
            <div class="card-body items-center py-2">
                <form onSubmit={logIn}>
                    <div class="mb-3">
                        <label for="email"
                            class="input input-bordered input-primary w-full max-w-xs flex items-center gap-2">
                            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 16 16" fill="currentColor"
                                class="h-4 w-4 opacity-70">
                                <path
                                    d="M2.5 3A1.5 1.5 0 0 0 1 4.5v.793c.026.009.051.02.076.032L7.674 8.51c.206.1.446.1.652 0l6.598-3.185A.755.755 0 0 1 15 5.293V4.5A1.5 1.5 0 0 0 13.5 3h-11Z" />
                                <path
                                    d="M15 6.954 8.978 9.86a2.25 2.25 0 0 1-1.956 0L1 6.954V11.5A1.5 1.5 0 0 0 2.5 13h11a1.5 1.5 0 0 0 1.5-1.5V6.954Z" />
                            </svg>
                                  <input id="email" class="grow" value={email} type="text"
                                placeholder="Email" onChange={(e) => setEmail(e.target.value)} required />
                        </label>

                    </div>
                    <div class="mb-3">
                        <label for="password"
                            class="input input-bordered input-primary w-full max-w-xs flex items-center gap-2">
                            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 16 16" fill="currentColor"
                                class="h-4 w-4 opacity-70">
                                <path fill-rule="evenodd"
                                    d="M14 6a4 4 0 0 1-4.899 3.899l-1.955 1.955a.5.5 0 0 1-.353.146H5v1.5a.5.5 0 0 1-.5.5h-2a.5.5 0 0 1-.5-.5v-2.293a.5.5 0 0 1 .146-.353l3.955-3.955A4 4 0 1 1 14 6Zm-4-2a.75.75 0 0 0 0 1.5.5.5 0 0 1 .5.5.75.75 0 0 0 1.5 0 2 2 0 0 0-2-2Z"
                                    clip-rule="evenodd" />
                            </svg>
                                  <input id="password" class="grow" value={password} type="password" onChange={(e)=> setPassword(e.target.value)}
                              required />
                        </label>
                    </div>
                    <div class="form-check mb-3">
                        <input
                            type="checkbox"
                            id="rememberMe"
                            name="rememberMe"
                            class="form-check-input"
                            onChange={(e) => setRememberMe(e.target.checked)}
                        />
                        <label for="rememberMe" class="form-check-label">Se souvenir de moi</label>
                    </div>
                        <button type="submit" class="btn btn-primary btn-outliner mb-3">Se connecter</button>
                        
                </form>
            </div>
          <div><a href='/register' className='text-center mb-3'>Créer un compte</a></div>        
        </div>
    </div>
  </section >
    
  )
}
