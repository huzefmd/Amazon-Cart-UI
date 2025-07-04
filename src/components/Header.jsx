import React from "react";
import { useCartItemStore } from "../store/cartItemState";
import { Link } from "react-router-dom";
import { ShoppingCart } from "lucide-react";

function Header() {
  const itemCount = useCartItemStore((state) => state.cartItems.reduce((acc,item)=>acc+item.quantity,0));
    return <header className="border ">
        <div className="flex justify-between p-4 text-center text-4xl "> 
            <div>
                <Link to='/' >
                    <h1>amazon.in</h1>
                </Link>
            </div>
            <div className="flex justify-between gap-2">
                <h1>Hellow User</h1>
                <div className="flex justify-between">
                    <Link to='/cart'>
                        <ShoppingCart size={24}/>
                    </Link>
                    <span>{itemCount }</span>
                </div>

            </div>
      </div>
  </header>;
}

export default Header;
