import * as React from "react"
import { useCart,  } from "@/components/ui/cart-context"
import { Button } from "@/components/ui/button"
import {
  Card,
  CardContent,
  CardFooter,
} from "@/components/ui/card"
import { useState, useEffect } from "react"
import'./ProductCard.css'
import axios from "axios"

export default function ProductCard( {product}) {
  const [data, setData] = useState("")
  const [isLoading, setLoading] = useState(true)
  const [editText, setEditText] = useState({
    'product_name': ''
  })
  const [editNumber, setEditNumber] = useState({
    'model_number': ''
  })
  const [editPrice, setEditPrice] = useState({
    'product_price': ''
  })

  useEffect(() => {
    fetchData()
    console.log(data);

  }, []);
   
  const fetchData = async () => {
    try {
      const response = await axios.get('http://127.0.0.1:8000/connect/products/');
      // const data = await response.json();
      setData(response.data)
      setLoading(false)

    } catch (error) {
      console.error(error);
    }
  }
  const [newProduct, setNewProduct] = useState({
    'product_name': '',
    'model_number': '',
    'product_price': '',
  })
    const handleChange = (e) => {
      setNewProduct(prev => ({
        ...prev,
        'product_name': e.target.value,
        'model_number': e.target.value,
        'product_price': e.target.value
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
    const handleEdit = async (id, value) => {
      try{
        const response = axios.patch(`http://127.0.0.1:8000/connect/products/${id}/`, value)
        const newDevice = data.map(device => data.id === id ? response.data : device)
        setData(newDevice)
      }
      catch (error) {
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
        <div>
          <div className="flex flex-row ">
            {isLoading ? (
              <div>Is Loading..</div>
            ) : (
              <>
                {data.map((product, index) => (
                  <div key={index}>
               <Card className="productcard">
              <CardContent className="py-4 pl-0 pr-0 " >
        <div>
          <img src="/Coolernew.jpg" alt="cooler" className="w-full h-40 mx-4 mt-4 object-cover" />
        </div>
                    <h1 className="text-2xl pb-2 mt-2 ml-4 font-semibold flex justify-center">{product.product_name}</h1>
                    {/* <h3>{product.model_number}</h3> */}
            <div className="flex relative h-14 w-200">
            <h2 className="text-xl pr-2 pl-4"> Rs {product.product_price}/- </h2>
            <div className=" absolute right-0   ">
            <Button variant="outline" className='bg-white ml-6 ' onClick={handleAddToCart}>
              {/* Button content missing */} <img src="addcart.png" className="  py-0 w-6 h-6 object-contain"/>
            </Button>
            </div>
          </div>
          </CardContent>
          </Card>     
          </div>
                ))}
              </>
            )}
          </div>
        </div>
   
    
  )
}
