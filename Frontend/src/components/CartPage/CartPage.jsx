  import { Badge } from "@/components/ui/badge"
  import { Button } from "@/components/ui/button"
  import {
    Card,
    CardContent,
    CardDescription,
    CardHeader,
    CardTitle,
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
  // import './Dashboard.css';
  import Navbar from "../DevicesPage/Navbar"
  // import Status from "./Status"
  import axios from "axios"
  import {useEffect, useState} from 'react'
  
  export default function CartPage() {
    const [data, setData] = useState("")
    const [isLoading, setLoading] = useState(true)
    const [editText, setEditText] = useState({
      'product_name': ''
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
        const response = await axios.get('http://127.0.0.1:8000/connect/Carts/');
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
          await axios.post('http://127.0.0.1:8000/connect/Carts/', newProduct);
          fetchData()
        } catch (error) {
          console.log(error);
        }
      }
      const handleEdit = async (id, value) => {
        try{
          const response = axios.patch(`http://127.0.0.1:8000/connect/Carts/${id}/`, value)
          const newDevice = data.map(device => data.id === id ? response.data : device)
          setData(newDevice)
        }
        catch (error) {
          console.log(error);
        }
      }
  
      const handleQuantityChange = (id, change) => {
        setCart(cart.map(Carts => 
          Carts.id === id 
          ? { ...Carts, quantity: Carts.quantity + change >= 0 ? Carts.quantity + change : 0 } 
          : Carts
        ));
      };
    
      const getTotal = () => {
        return cart.reduce((acc, Carts) => acc + (Carts.product_price * Carts.quantity), 0).toFixed(2);
      };
    
      const [cart, setCart] = useState([
        { quantity: 1 },
      ]);
  
    return (
      
      <div className="flex flex-col min-h-screen w-full">
    
      <Navbar />
  
        <main className="flex flex-1 flex-col gap-4 p-4 md:gap-8 md:p-8">
          <div className="grid gap-4 md:gap-8 lg:grid-cols-2 xl:grid-cols-3">
         
            <Card
              className="xl:col-span-2 shadow-lg" x-chunk="dashboard-01-chunk-4"
            >
              <CardHeader className="flex flex-row items-center">
                <div className="grid gap-2">
                  <CardTitle>My Cart</CardTitle>

                </div>
                 </CardHeader>
              <CardContent>
                <Table>
                  <TableHeader>
                    <TableRow>
                      <TableHead>Product</TableHead>
                      <TableHead className="">
                        Price per peice 
                      </TableHead>
                      <TableHead className=" ">
                        Quantity
                      </TableHead>
                      {/* <TableHead className="hidden xl:table-column">
                        Date
                      </TableHead> */}
                      <TableHead className= "text-right">Price</TableHead>
                      {/* <TableHead className=" hidden text-right">Status</TableHead> */}
                    </TableRow>
                  </TableHeader>
                  <TableBody
                  data={data}
                  setData={setData}
                  isLoading={isLoading}
                  >
                    {isLoading ? <div>Is Loading..</div>:
                    <>
                    {data.map((Carts, index) => {
                      
                      return( 
                    <TableRow key={Carts.id}>
                      <TableCell>
                        <div className="font-medium">
                          {Carts.product_name}
                          </div>
                      </TableCell>
                      <TableCell>
                        {Carts.product_price}
                        </TableCell>
                      <TableCell className=" xl:table-column">
                        <div className="quantity">
                          <Button variant = "outline" className="text-slate-900" onClick={() => handleQuantityChange(item.id, -1)}>-</Button>
                          <span>{Carts.quantity}</span>
                          <Button variant = "outline" className="text-slate-900" onClick={() => handleQuantityChange(item.id, 1)}>+</Button>
                        </div>
                      </TableCell>
                      {/* <TableCell className="hidden xl:table-column">
                        <Badge className="text-xs" variant="outline">
                          Approved
                        </Badge>
                      </TableCell> */}
                      {/* <TableCell className="hidden md:table-cell lg:hidden xl:table-column">
                        2023-06-23
                      </TableCell> */}
                      <TableCell> 
                      <div className="total">${(Carts.product_price * Carts.quantity).toFixed(2)}</div>
                      </TableCell>
                    </TableRow>
       
                  )  })}</>}
                  </TableBody>
                  <TableFooter>
                    <Button> Cancel Order</Button>
                  </TableFooter>
                </Table>
              </CardContent>
            </Card>
            <div className="new-card ">
             
            <div className="nested-2">
            <Card className='shadow-lg' x-chunk="dashboard-01-chunk-3">
                  <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
                  <CardTitle className="text-lg font-medium ">
                  Coupon-Code
                  </CardTitle>
                  </CardHeader>
                  <CardContent>
                  <div className="coupon-code">
                  <input type="text" placeholder="Enter Your Coupon Code" />
                  <Button variant ="darkOutlined "className=" border-2">Apply Your Coupon</Button>
                </div>
                </CardContent>
            </Card>
            </div>
             <div className="nested-1 ">
             <Card className="shadow-lg"  x-chunk="dashboard-01-chunk-0">
              <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
                <CardTitle className="text-lg font-medium">
                  Order Summary
                </CardTitle>
                
                {/* <DollarSign className="h-4 w-4 text-muted-foreground" /> */}
              </CardHeader>
              <CardContent>
              <div className="readings">
                <p>  Discount  </p>
                </div>
                <div className="readings">
                <p> Delivery </p>
                </div>
                <p> Tax  </p>
                <p> Total Amount  </p>
              </CardContent>
            </Card>
            </div>
            <div className="nested-2">
            <Card className='shadow-lg' x-chunk="dashboard-01-chunk-3">
                  <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
                  <CardTitle className="text-lg font-medium ">
                  Payment Methods
                  </CardTitle>
                  </CardHeader>
                  <CardContent>
                  <div className="coupon-code">
                  <input type="text" placeholder="Enter Your Coupon Code" />
                  <Button variant ="darkOutlined "className=" border-2">Apply Your Coupon</Button>
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
  