import { BasketCard } from "../components";
import { useTitle } from "../hooks/useTitle";

export const Cart = () => {
  const products = [
    {"id": 1, "name": "Sony Wh-Ch510 Bluetooth Wireless", "price": 149, "image": "/assets/images/1001.png"},
    {"id": 2, "name": "boAt Rockerz 450", "price": 49, "image": "/assets/images/1002.png"},
    
  ]
  useTitle("Cart");
  return (
   <main>
    <section className="cart">
     <h1>Cart items: {products.length}</h1>
    { products.map((product) =>(
      <BasketCard key = {products.id} product = {product}  />
     ))
    }
    </section>
   </main>
  )
}


