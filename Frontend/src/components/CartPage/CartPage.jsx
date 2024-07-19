import { Badge } from "@/components/ui/badge"
import { Button } from "@/components/ui/button"
import {NavLink} from 'react-router-dom'
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
  CardFooter,
} from "@/components/ui/card"
import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
  TableFooter,
} from "@/components/ui/table"  
import { Input } from "@/components/ui/input"
import Navbar from "../DevicesPage/Navbar"
import axios from "axios"
import { useEffect, useState } from 'react'
export default function CartPage() {
  const [data, setData] = useState([])
  const [isLoading, setLoading] = useState(true)
  const [newProduct, setNewProduct] = useState({
    'product_name': '',
    'model_number': '',
    'product_price': '',
  })

  useEffect(() => {
    fetchData()
  }, []);

  const fetchData = async () => {
    try {
      const response = await axios.get('http://127.0.0.1:8000/connect/Carts/');
      setData(response.data)
      setLoading(false)
    } catch (error) {
      console.error(error);
    }
  }

  const handleChange = (e) => {
    setNewProduct(prev => ({
      ...prev,
      [e.target.name]: e.target.value,
    }))
  }

  const postDevice = async () => {
    try {
      await axios.post('http://127.0.0.1:8000/connect/Carts/', newProduct);
      fetchData()
    } catch (error) {
      console.log(error);
    }
  }

  const handleQuantityChange = async (id, change) => {
    const updatedData = data.map(item => 
      item.id === id 
      ? { ...item, product_quantity: item.product_quantity + change >= 0 ? item.product_quantity + change : 0 } 
      : item
    );
    setData(updatedData);

    try {
      await axios.patch(`http://127.0.0.1:8000/connect/Carts/${id}/`, {
        product_quantity: updatedData.find(item => item.id === id).product_quantity
      });
    } catch (error) {
      console.error(error);
    }
  }

  const getTotal = () => {
    return data.reduce((acc, Carts) => acc + (Carts.product_price * Carts.product_quantity), 0).toFixed(2);
  }

  return (
    <div className="flex flex-col min-h-screen w-full">
      <Navbar />
      <main className="flex flex-1 flex-col gap-4 p-4 md:gap-8 md:p-8">
        <div className="grid gap-4 md:gap-8 lg:grid-cols-2 xl:grid-cols-3">
          <Card className="xl:col-span-2 shadow-lg">
            <CardHeader className="flex flex-row items-center">
              <div className="grid gap-2">
                <CardTitle>My Cart</CardTitle>
              </div>
            </CardHeader>
            <CardContent>
              <Table>
                <TableHeader>
                  <TableRow>
                    <TableHead >Product image</TableHead>
                    <TableHead>Product</TableHead>
                    <TableHead>Price per piece</TableHead>
                    <TableHead>Quantity</TableHead>
                    <TableHead className="text-right">Price</TableHead>
                  </TableRow>
                </TableHeader>
                <TableBody>
                  {isLoading ? (
                    <div>Loading...</div>
                  ) : (
                    data.map((Carts) => (
                      <TableRow key={Carts.id}>
                        <TableCell><img src="/Coolernew.jpg" className="object-contain w-16 h-16"/></TableCell>
                        <TableCell>
                          <div className="font-medium">{Carts.product_name}</div>
                        </TableCell>
                        <TableCell>${Carts.product_price.toFixed(2)}</TableCell>
                        <TableCell>
                          <div className="quantity">
                            <Button variant="outline" className="text-slate-900" onClick={() => handleQuantityChange(Carts.id, -1)}>-</Button>
                            <span>{Carts.product_quantity}</span>
                            <Button variant="outline" className="text-slate-900" onClick={() => handleQuantityChange(Carts.id, 1)}>+</Button>
                          </div>
                        </TableCell>
                        <TableCell className="text-right">
                          ${ (Carts.product_price * Carts.product_quantity).toFixed(2)}
                        </TableCell>
                      </TableRow>
                    ))
                  )}
                </TableBody>
              </Table>
            </CardContent>
            <CardFooter>
              <div className="flex justify-between w-full">
                <NavLink to="/pg" className="  pr-2 pl-2 border-slate-700 mr-36"> Continue shopping
                </NavLink>
                <Button className="ml-72">Cancel Order</Button>
              </div>
            </CardFooter>
          </Card>
          <div className="new-card">
            <div className="nested-2">
              <Card className='shadow-lg'>
                <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
                  <CardTitle className="text-lg font-medium">Coupon-Code</CardTitle>
                </CardHeader>
                <CardContent>
                  <div className="coupon-code">
                    <input type="text" placeholder="Enter Your Coupon Code" />
                    <Button variant="darkOutlined" className="border-2">Apply Your Coupon</Button>
                  </div>
                </CardContent>
              </Card>
            </div>
            <div className="nested-1 mt-4">
              <Card className="shadow-lg">
                <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
                  <CardTitle className="text-lg font-medium">Order Summary</CardTitle>
                </CardHeader>
                <CardContent>
                  <div className="flex flex-col">
                    <p>Discount</p>
                    <p>Delivery</p>
                    <p>Total Amount ${getTotal()}</p>
                  </div>
                </CardContent>
              </Card>
            </div>
            <div className="nested-2">
              <Card className='shadow-lg'>
                <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
                  <CardTitle className="text-lg font-medium">Payment Methods</CardTitle>
                </CardHeader>
                <CardContent>
                  <div className="flex flex-col">
                    <Button variant = "outline" >Credit Card</Button>
                    <Button variant = "outline" > UPI</Button>
                  </div>
                </CardContent>
              </Card>
            </div>
          </div>
        </div>
      </main>
    </div>
  )
}
