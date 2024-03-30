'use client';

import { CartContextProvider } from "@/hocks/useCart";

interface CartproviderProps{
    children: React.ReactNode
}
const CartProvider: React.FC<CartproviderProps>=({children}) =>{
  return (
    <CartContextProvider>{children}</CartContextProvider>
  );
};
export default CartProvider;