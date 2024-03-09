// compoonente del lado del cliente
import { CartCounter } from "@/app/shopping-cart";

export const metadata = {
 title: 'Counter page',
 description: 'Contador',
};


export default function CounterPage() {


  return (
    <div className="flex flex-col items-center justify-center w-full h-full">
      <span>Productos en el carrito de compras</span>
      
      <CartCounter value={ 20 }/>
    </div>
  );
}