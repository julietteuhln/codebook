import { useState } from "react";
import { useEffect } from 'react';
import { useParams } from "react-router-dom";
import { getProduct } from "../services/productService";
import { toast } from "react-toastify";
import { useTitle } from "../hooks/useTitle";
import { Rating } from "../components/Elements/Rating";
import { useCart } from "../context/CartContext";

export const ProductDetail = () => {

  const [product, setProduct] = useState({});
  const { id } = useParams();
  const { cartList, addToCart, removeFromCart } = useCart();
  const [inCart, setInCart] = useState(false);

  useTitle(product.name)

  useEffect(() => {
    async function fetchProducts(){
      try{
        const data = await getProduct(id);
        console.log(data)
        setProduct(data);
      } catch(error){
        toast.error(error.message, {closeButton: true, position: "bottom-center" });
      }      
    }
    fetchProducts();
  }, [id]);

  useEffect(() => {
    if (product.id) {
      const productInCart = cartList.find(item => item.id === product.id);
      setInCart(!!productInCart);
    } else {
      setInCart(false);
    }
  }, [cartList, product.id]);


  if (!product || !product.name) {
  return <p>Chargement...</p>;
}

  return (
    <main>
        <section>
          <h1 className="mt-10 mb-5 text-4xl text-center font-bold text-gray-900 dark:text-primary">{product.name}</h1>
          <p className="mb-5 text-lg text-center text-gray-900 dark:text-primary">{product.overview}</p>
          <div className="flex flex-wrap justify-around">
            <div className="max-w-xl my-3">
              <img className="rounded" src={product.poster} alt={product.name} />
            </div>
            <div className="max-w-xl my-3">
              <p className="text-3xl font-bold text-gray-900 dark:text-primary">
                <span className="mr-1">$</span>
                <span className="dark:text-primary">{product.price}</span>
              </p>
              <div className="my-3"> 
                <Rating rating={product.rating} />
              </div>
              <p className="my-4 select-none">
                { product.best_seller && <span className="font-semibold text-amber-500 border bg-amber-50 rounded-lg px-3 py-1 mr-2">BEST SELLER</span> }
                { product.in_stock && <span className="font-semibold text-emerald-600	border bg-slate-100 rounded-lg px-3 py-1 mr-2">INSTOCK</span> }
                { !product.in_stock && <span className="font-semibold text-rose-700 border bg-slate-100 rounded-lg px-3 py-1 mr-2">OUT OF STOCK</span> }
                <span className="font-semibold text-blue-500 border bg-slate-100 rounded-lg px-3 py-1 mr-2">{product.size} MB</span>
              </p>
              <p className="my-3">
                { !inCart && <button onClick={() => addToCart(product)} className={`inline-flex items-center py-2 px-5 text-lg font-medium text-center text-white bg-blue-700 rounded-lg hover:bg-blue-800 ${product.in_stock ? "" : "cursor-not-allowed"}`} disabled={ product.in_stock ? "" : "disabled" }>Add To Cart <i className="ml-1 bi bi-plus-lg"></i></button> } 
                { inCart && <button onClick={() => removeFromCart(product)} className={`inline-flex items-center py-2 px-5 text-lg font-medium text-center text-white bg-red-600 rounded-lg hover:bg-red-800 ${product.in_stock ? "" : "cursor-not-allowed"}`}  disabled={ product.in_stock ? "" : "disabled" }>Remove Item <i className="ml-1 bi bi-trash3"></i></button> }  
              </p>
              <p className="text-lg text-gray-900 dark:text-primary">
                {product.long_description}
              </p>
            </div>
          </div>
        </section>
      </main> 
  )
}
