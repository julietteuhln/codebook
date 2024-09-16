import React, { useState } from 'react';
import { useRef } from 'react';
import { useNavigate } from 'react-router-dom';

export const Search = ({setSearchSection}) => {

  const navigate = useNavigate();
  const searchRef = useRef();

  const onSearch = (event) => {
    event.preventDefault();
    setSearchSection(false);
    navigate(`/products?q=${searchRef.current.value}`);
  }

  return (
     <div className="mx-auto max-w-screen-xl p-2 my-5">
        <form onSubmit={onSearch} className="flex items-center">   
            <div className="relative w-full">
                <input ref={searchRef} name="search" type="text" id="simple-search" className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full pl-10 p-2.5  dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" placeholder="Search" autoComplete="off" required="" />
            </div>
            <button type="submit" className="py-2.5 px-3 ml-2 text-white btn btn-primary rounded-lg border">
              <svg
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 24 24"
              fill="currentColor"
              className="size-6">
             <path fillRule="evenodd" d="M10.5 3.75a6.75 6.75 0 1 0 0 13.5 6.75 6.75 0 0 0 0-13.5ZM2.25 10.5a8.25 8.25 0 1 1 14.59 5.28l4.69 4.69a.75.75 0 1 1-1.06 1.06l-4.69-4.69A8.25 8.25 0 0 1 2.25 10.5Z" clipRule="evenodd" />
              </svg>
            </button>
        </form>
    </div>
  )
}
