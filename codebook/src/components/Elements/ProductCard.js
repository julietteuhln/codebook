import React from 'react';
import { useEffect } from "react";
import { useState } from "react";
import { useCart } from "../../context/CartContext";
import { Rating } from "./Rating";

export const ProductCard = ({ product }) => {

  const { cartList, addToCart, removeFromCart } = useCart();
  const [inCart, setInCart] = useState(false);
    
  useEffect(() => {
    const productInCart = cartList.find(item => item.id === product.id);
    setInCart(!!productInCart);
  }, [cartList, product]);

  const handleAddToCart = () => addToCart(product);
  const handleRemoveFromCart = () => removeFromCart(product);
  
  return (
   <div className='card card-compact bg-base-100 w96 shadow-xl dark:text-primary'>
      <figure>
        <img
          src={product.poster}
          alt={product.name}
          onError={(e) => { e.target.src = 'default-image-url.png'; }}
        />
      </figure>
      <div className='card-body'>
        <h2 className='card-title h2 text-bold dark:text-primary'>{product.name}</h2>
        <div className='badge badge-secondary dark:text-primary'>NEW</div>
        <p className="text-gray-700 mb-2 dark:text-primary">{product.overview}</p>
        <div> 
          <Rating rating={product.rating}/>
        </div>
        <div className='card-actions justify-end dark:text-primary'>
          <p className='text-2xl font-bold dark:text-primary'>$ {product.price}</p>
            { !inCart ? (
              <button
                onClick={handleAddToCart}
                className='btn btn-primary'
              >
                Ajouter au panier
              </button>
              ) : (
              <button
                onClick={handleRemoveFromCart}
                className='btn btn-error'
              >
              Enlever
            </button>
            )}
      </div>
    </div>
  </div>
  )
}
