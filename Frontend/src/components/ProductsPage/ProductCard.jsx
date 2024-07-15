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
  const [data, setData] = useState("")
  const [isLoading, setLoading] = useState(true)
  const [editText, setEditText] = useState({
    'name': ''
  })
  const [editNumber, setEditNumber] = useState({
    '12345678': ''
  })
  const [editPrice, setEditPrice] = useState({
    '999': ''
  })

  useEffect(() => {
    fetchData()
    console.log(data);

  }, []);
   
  const fetchData = async () => {
    try {
      const response = await axios.get('http://127.0.0.1:8000/connect/sensors/');
      // const data = await response.json();
      setData(response.data)
      setLoading(false)

    } catch (error) {
      console.error(error);
    }
  }
  const [newProduct, setNewDProduct] = useState({
    'name': '',
    '12345678': '',
    '999': '',
  })
    const handleChange = (e) => {
      setNewDevice(prev => ({
        ...prev,
        'name': e.target.value,
        '12345678': e.target.value,
        '999': e.target.value
      }))
      console.log(newProduct);
    }
    const postDevice = async () => {
      try {
        await axios.post('http://127.0.0.1:8000/connect/products/', newProduct);
        fetchData()
      } catch (error) {
        console.log(error);
      }
    }
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
