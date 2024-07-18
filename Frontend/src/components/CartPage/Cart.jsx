import ShoppingCart from "./ShoppingCart";
import { Button } from "@/components/ui/button"
import {NavLink} from 'react-router-dom'
export default function Cart() {
  return (
    <div>
        <NavLink to="/ct">
        <Button variant = "outline">
        <img className="w-6 h-6 object-contain "src="cart.png" alt="cart" />      
        </Button>
      </NavLink>
    </div>
  );
}