import { useTitle } from "../../hooks/useTitle";
import { CartEmpty } from "./components/CartEmpty";
import { CartList } from "./components/CartList";
import { useCart } from "../../context/CartContext";


export const Cart = () => {
  const { cartList } = useCart();
  useTitle(`Cart (${cartList.length})`);

  return (
    <main>
      { cartList.length ? <CartList /> : <CartEmpty /> }   
    </main>
  )
}