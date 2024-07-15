import * as React from "react"
import { useCart } from "@/components/ui/cart-context"
import { Button } from "@/components/ui/button"
import {
  Card,
  CardContent,
  CardFooter,
} from "@/components/ui/card"
import { useState } from "react"
import'./ProductCard.css'

export default function ProductCard( {product}) {
  const { addToCart, cartItems } = useCart()
   const [quantity, setQuantity] = useState(0)

  const handleAddToCart = () => {
    if (product) {
      addToCart(product)
      setQuantity(1)
    }
  }
  const isProductInCart =
    product && cartItems.some(item => item.product.id === product.id)
  return (
    <Card className="productcard">
      <CardContent >
        <div>
          <img src="/Coolernew.jpg" alt="cooler" className="w-full h-40 object-cover" />
        </div>
        <div>
        <div>
            <h3>Device Name</h3>
            {/* <Input placeholder="Enter device name" /> */}
            <h3>Model Number</h3>
            {/* <Input placeholder="Enter model number" /> */}
        </div>
        <div className="cartbutton">
          <h4 className="price">  Price</h4>
          &nbsp; &nbsp; &nbsp; &nbsp;&nbsp; &nbsp;&nbsp; &nbsp;&nbsp; &nbsp;&nbsp; &nbsp;    
          <Button
          className ='bg-white'
        onClick={handleAddToCart}
        disabled={isProductInCart ? true : undefined}
      >
        {isProductInCart ? "Added" : <img src="addcart.png" className="w-4 h-4 object-cover" />}
      </Button>
        </div>
        </div>
      </CardContent>
    </Card>
  )
}
