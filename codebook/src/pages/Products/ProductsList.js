import React, { useEffect, useState } from 'react';
import { getProductList } from '../../services/productService';
import { Link } from 'react-router-dom';
import { useTitle } from '../../hooks/useTitle';
import { ProductCard } from '../../components/Elements/ProductCard';
import { useLocation } from 'react-router-dom';
import { FilterBar} from './components/FilterBar'
import { useFilter } from '../../context/FilterContext';


export const ProductsList = () => {
  const { products, initProductList } = useFilter();
  const [loader, setLoader] = useState(true);
  const [error, setError] = useState(null);
  const [show, setShow] = useState(false);
  const search = useLocation().search;
  const searchTerm = new URLSearchParams(search).get("q");
  useTitle("Explore eBooks Collection");

  useEffect(() => {
    const fetchProducts = async () => {
      try {
        const data = await getProductList(searchTerm);
        initProductList(data);
      } catch (err) {
        setError(err.message);
      } finally {
        setLoader(false);
      }
    };

    fetchProducts();
  }, [searchTerm]);

  if (loader) return <div><span className="loading loading-spinner text-primary">Chargement des articles...</span></div>;

  if (error) return <p>Erreur: {error}</p>;

  return (
    <main>
      <section className='container mx-auto px-4 py-4'>
        <div className='flex flex-wrap justify-center lg:flex-row'>
          <div className="my-5 flex justify-between">
            <span className="text-2xl font-semibold dark:text-slate-100 mb-5 dark:text-primary">All eBooks ({products.length})</span>
            <span>
              <button onClick={() => setShow(!show)} id="dropdownMenuIconButton" data-dropdown-toggle="dropdownDots" className="inline-flex items-center p-2 text-sm font-medium text-center text-gray-900 bg-gray-100 rounded-lg hover:bg-gray-200 dark:text-white dark:bg-gray-600 dark:hover:bg-gray-700" type="button"> 
                <svg className="w-6 h-6" aria-hidden="true" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path d="M10 6a2 2 0 110-4 2 2 0 010 4zM10 12a2 2 0 110-4 2 2 0 010 4zM10 18a2 2 0 110-4 2 2 0 010 4z"></path></svg>
              </button>
            </span>            
          </div>
          <div className='flex flex-wrap justify-center lg:flex-row mb-3'>
            {products.map(product => (
              <Link
                to={`/products/${product.id}`}
                key={product.id}
                className="m-3 max-w-sm rounded-lg hover:shadow-xl border-gray-200 shadow-md transition-shadow"
              >
                <ProductCard product={product} />
              </Link>
            ))}
          </div>
        </div>
      </section>
      { show && <FilterBar setShow={setShow} /> }
    </main>
  );
}