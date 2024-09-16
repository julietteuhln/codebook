import React, { useEffect, useState } from 'react';
import logo from '../../assets/logo.png';
import { Search } from '../sections/Search';
import { Link, useNavigate } from 'react-router-dom';
import { useCart } from '../../context/CartContext';

export default function Header() {

  const [searchSection, setSearchSection] = useState(false);
  const [theme, setTheme] = useState(localStorage.getItem('theme') || 'nord');
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const navigate = useNavigate();
  const { cartList, total } = useCart();
  const token = JSON.parse(sessionStorage.getItem("token"));

  useEffect(() => {
    document.documentElement.setAttribute('data-theme', theme);
    localStorage.setItem('theme', theme);
  }, [theme]);

  useEffect(() => {
    const token = sessionStorage.getItem('token') || localStorage.getItem('token');
    setIsLoggedIn(!!token);
  }, []);


  const handleThemeChange = (e) => {
    const newTheme = e.target.checked ? 'nord' : 'dark';
    setTheme(newTheme);
  };

  const logOut = () => {
    sessionStorage.removeItem('token');
    localStorage.removeItem('token');
    setIsLoggedIn(false);
    navigate('/login');
  }

  return (
    <header>
      <div className='navbar mx-auto justify-between base-300 bg-neutral text-white'>
        <div>
          <a href='/' className='flex items-center'>
          <img src={logo} alt='logo' width={40}/>
          <span className='text-xl font-bold mx-1 text-white'>Codebook</span>
        </a>
        </div>
        <div className='flex items-center relative'>
          <div className='btn btn-ghost btn-circle'>
            <label className='swap swap-rotate'>
              <input
                type='checkbox'
                className='theme-controller'
                checked={theme === 'nord'}
                onChange={handleThemeChange}
              />
              <svg
                className='swap-off size-6'
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 24 24" fill="currentColor"
              >
                <path d="M17.004 10.407c.138.435-.216.842-.672.842h-3.465a.75.75 0 0 1-.65-.375l-1.732-3c-.229-.396-.053-.907.393-1.004a5.252 5.252 0 0 1 6.126 3.537ZM8.12 8.464c.307-.338.838-.235 1.066.16l1.732 3a.75.75 0 0 1 0 .75l-1.732 3c-.229.397-.76.5-1.067.161A5.23 5.23 0 0 1 6.75 12a5.23 5.23 0 0 1 1.37-3.536ZM10.878 17.13c-.447-.098-.623-.608-.394-1.004l1.733-3.002a.75.75 0 0 1 .65-.375h3.465c.457 0 .81.407.672.842a5.252 5.252 0 0 1-6.126 3.539Z" />
                <path fillRule="evenodd" d="M21 12.75a.75.75 0 1 0 0-1.5h-.783a8.22 8.22 0 0 0-.237-1.357l.734-.267a.75.75 0 1 0-.513-1.41l-.735.268a8.24 8.24 0 0 0-.689-1.192l.6-.503a.75.75 0 1 0-.964-1.149l-.6.504a8.3 8.3 0 0 0-1.054-.885l.391-.678a.75.75 0 1 0-1.299-.75l-.39.676a8.188 8.188 0 0 0-1.295-.47l.136-.77a.75.75 0 0 0-1.477-.26l-.136.77a8.36 8.36 0 0 0-1.377 0l-.136-.77a.75.75 0 1 0-1.477.26l.136.77c-.448.121-.88.28-1.294.47l-.39-.676a.75.75 0 0 0-1.3.75l.392.678a8.29 8.29 0 0 0-1.054.885l-.6-.504a.75.75 0 1 0-.965 1.149l.6.503a8.243 8.243 0 0 0-.689 1.192L3.8 8.216a.75.75 0 1 0-.513 1.41l.735.267a8.222 8.222 0 0 0-.238 1.356h-.783a.75.75 0 0 0 0 1.5h.783c.042.464.122.917.238 1.356l-.735.268a.75.75 0 0 0 .513 1.41l.735-.268c.197.417.428.816.69 1.191l-.6.504a.75.75 0 0 0 .963 1.15l.601-.505c.326.323.679.62 1.054.885l-.392.68a.75.75 0 0 0 1.3.75l.39-.679c.414.192.847.35 1.294.471l-.136.77a.75.75 0 0 0 1.477.261l.137-.772a8.332 8.332 0 0 0 1.376 0l.136.772a.75.75 0 1 0 1.477-.26l-.136-.771a8.19 8.19 0 0 0 1.294-.47l.391.677a.75.75 0 0 0 1.3-.75l-.393-.679a8.29 8.29 0 0 0 1.054-.885l.601.504a.75.75 0 0 0 .964-1.15l-.6-.503c.261-.375.492-.774.69-1.191l.735.267a.75.75 0 1 0 .512-1.41l-.734-.267c.115-.439.195-.892.237-1.356h.784Zm-2.657-3.06a6.744 6.744 0 0 0-1.19-2.053 6.784 6.784 0 0 0-1.82-1.51A6.705 6.705 0 0 0 12 5.25a6.8 6.8 0 0 0-1.225.11 6.7 6.7 0 0 0-2.15.793 6.784 6.784 0 0 0-2.952 3.489.76.76 0 0 1-.036.098A6.74 6.74 0 0 0 5.251 12a6.74 6.74 0 0 0 3.366 5.842l.009.005a6.704 6.704 0 0 0 2.18.798l.022.003a6.792 6.792 0 0 0 2.368-.004 6.704 6.704 0 0 0 2.205-.811 6.785 6.785 0 0 0 1.762-1.484l.009-.01.009-.01a6.743 6.743 0 0 0 1.18-2.066c.253-.707.39-1.469.39-2.263a6.74 6.74 0 0 0-.408-2.309Z" clipRule="evenodd" />
              </svg>
              <svg
                className="swap-on size-6"
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 24 24">
                <path fillRule='evenodd' fill='currentColor' d="M21.64,13a1,1,0,0,0-1.05-.14,8.05,8.05,0,0,1-3.37.73A8.15,8.15,0,0,1,9.08,5.49a8.59,8.59,0,0,1,.25-2A1,1,0,0,0,8,2.36,10.14,10.14,0,1,0,22,14.05,1,1,0,0,0,21.64,13Zm-9.5,6.69A8.14,8.14,0,0,1,7.08,5.22v.27A10.15,10.15,0,0,0,17.22,15.63a9.79,9.79,0,0,0,2.1-.22A8.11,8.11,0,0,1,12.14,19.73Z" />
              </svg>
            </label>  
          </div>
          <div
            onClick={() => setSearchSection(!searchSection)}
            className='btn btn-ghost btn-circle' >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 24 24"
              fill="currentColor"
              className="size-6">
             <path fillRule="evenodd" d="M10.5 3.75a6.75 6.75 0 1 0 0 13.5 6.75 6.75 0 0 0 0-13.5ZM2.25 10.5a8.25 8.25 0 1 1 14.59 5.28l4.69 4.69a.75.75 0 1 1-1.06 1.06l-4.69-4.69A8.25 8.25 0 0 1 2.25 10.5Z" clipRule="evenodd" />
              </svg>
          </div>
          <div className='dropdown dropdown-end'>
            <div className='btn btn-ghost btn-circle' role='button' tabIndex={0} >
              <div className='indicator'>
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 24 24"
                  fill="currentColor"
                  className="size-6">
                  <path d="M2.25 2.25a.75.75 0 0 0 0 1.5h1.386c.17 0 .318.114.362.278l2.558 9.592a3.752 3.752 0 0 0-2.806 3.63c0 .414.336.75.75.75h15.75a.75.75 0 0 0 0-1.5H5.378A2.25 2.25 0 0 1 7.5 15h11.218a.75.75 0 0 0 .674-.421 60.358 60.358 0 0 0 2.96-7.228.75.75 0 0 0-.525-.965A60.864 60.864 0 0 0 5.68 4.509l-.232-.867A1.875 1.875 0 0 0 3.636 2.25H2.25ZM3.75 20.25a1.5 1.5 0 1 1 3 0 1.5 1.5 0 0 1-3 0ZM16.5 20.25a1.5 1.5 0 1 1 3 0 1.5 1.5 0 0 1-3 0Z" />
                </svg>
                <span className="badge badge-sm indicator-item">{cartList.length}</span>
              </div>
            </div>
            
            <div tabIndex={0} className='card card-compact dropdown-content bg-base-100 z-[1] mt-3 w-52 shadow'>
              <div className='card-body'>
                <span className='text-lg font-bold dark:text-primary'>{cartList.length} articles</span>
                <span className='text-info dark:text-primary'>Total : {total}€</span>
                <div className='card-actions'>
                  <Link to='/cart' className='btn btn-primary btn-block'>Voir le panier</Link>
                </div>
              </div>
            </div>
          </div>

          <div className='dropdown dropdown-end'>
            <div tabIndex={0} role="button" className="btn btn-ghost btn-circle avatar">
              <div className='indicator'>
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 24 24"
                  fill="currentColor"
                  className="size-6">
                  <path fillRule="evenodd" d="M18.685 19.097A9.723 9.723 0 0 0 21.75 12c0-5.385-4.365-9.75-9.75-9.75S2.25 6.615 2.25 12a9.723 9.723 0 0 0 3.065 7.097A9.716 9.716 0 0 0 12 21.75a9.716 9.716 0 0 0 6.685-2.653Zm-12.54-1.285A7.486 7.486 0 0 1 12 15a7.486 7.486 0 0 1 5.855 2.812A8.224 8.224 0 0 1 12 20.25a8.224 8.224 0 0 1-5.855-2.438ZM15.75 9a3.75 3.75 0 1 1-7.5 0 3.75 3.75 0 0 1 7.5 0Z" clipRule="evenodd" />
                </svg>
              </div>
            </div>
            <ul tabIndex={0} className="menu menu-sm dropdown-content bg-base-100 rounded-box z-[1] mt-3 w-52 p-2 shadow">
              <li>
                <a className="justify-between dark:text-primary" href='/products'>
                   All ebooks
                  <span className="badge">New</span>
                </a>
              </li>
              {isLoggedIn && <li><a className='dark:text-primary' href='/dashboard'>Dashboard</a></li>}
              {!isLoggedIn && <li><a className='dark:text-primary' href='/login'>Login</a></li>}
              {!isLoggedIn && <li><a className='dark:text-primary' href='/register'>Register</a></li>}
              {isLoggedIn && <li><a className='dark:text-primary' onClick={logOut}>Logout</a></li>}
            </ul>
          </div>
        </div>
      </div>

      {searchSection && <Search setSearchSection={setSearchSection} />}
      
    </header>
  )
}
