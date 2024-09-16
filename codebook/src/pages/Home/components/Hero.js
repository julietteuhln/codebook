import React from 'react';
import { Link } from "react-router-dom";

export default function Hero() {
  return (
    <section className="hero flex flex-col lg:flex-row dark:text-slate-100 items-center">
      <div className='hero-content'>
      <div className="text my-5">
        <h1 className="text-5xl font-bold dark:text-primary ">The Ultimate eBook Store</h1>
        <p className='py-6 dark:text-primary'>CodeBook is the world's most popular and authoritative source for computer science ebooks. Find ratings and access to the newest books digitally.</p>
        <Link to="/products" type="button" className="text-white btn-primary btn font-medium rounded-lg text-base px-5 py-2.5 mr-2 mb-2">Explore eBooks</Link>
      </div>
      <div className="visual my-5 lg:max-w-xl">
        <img className="rounded-lg max-h-full" src="https://images.unsplash.com/photo-1554415707-6e8cfc93fe23?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1470&q=60" alt="CodeBook Hero Section" />
        </div>
        </div>
    </section>
  )
}
