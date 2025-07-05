import React from 'react'
import Header from './Header'
import SideBar from './SideBar'
import { useCartItemStore } from '../store/cartItemState'
import { usewishItemStore } from '../store/wishItemState';


function WishList() {
  const update = useCartItemStore((state) => state.updateQuantity);
  const products = usewishItemStore((state) => state.products);
  return (
    <div>
      <Header />
      <div className="flex">
        <SideBar />
        <main className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4 p-4 flex-1">
          {products.map((item) => (
            <div
              key={item.id}
              className="border rounded-lg p-4 shadow hover:shadow-lg transition "
            >
              <img
                src={item.image}
                alt={item.name}
                className="w-full h-40 object-contain mb-5"
              />
              <h3 className="text-sm font-semibold mb-5">{item.name}</h3>
              <h3 className="text-lg font-bold text-green-600 mb-3">
                ₹{item.price}
              </h3>

              <button
                onClick={() => update(item.id, item.quantity + 1, item)}
                className="border p-3  w-full bg-yellow-400 hover:bg-yellow-500 rounded"
              >
                Add to Cart
              </button>
            </div>
          ))}
        </main>
      </div>
    </div>
  );
}

export default WishList
