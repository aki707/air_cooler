import {useEffect, useState} from 'react'
import axios from "axios"

import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogFooter,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog"
import {
  Plus,
  Search,
 } from "lucide-react"
 import { Input } from "@/components/ui/input"
import React from "react"
import { ScrollArea, ScrollBar } from "@/components/ui/scroll-area"
import { Separator } from "@/components/ui/separator"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { Button } from "@mui/material"
import ProductCard from "./ProductCard"
import './ProductTab.css'

export default function ProductTab(){
  const [data, setData] = useState("")
  const [isLoading, setLoading] = useState(true)
  const [editText, setEditText] = useState({
    'name': ''
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
      const response = await axios.get('http://127.0.0.1:8000/connect/sensors/');
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

  return (
    <Tabs defaultValue="music" className="h-full space-y-6">
      <TabsContent value="music" className="border-none p-0 outline-none">
        <Separator className="my-4" />
        <div className="relative" style={{ height: "320px" }}>
          <ScrollArea style={{  height: "345px" ,width: "1050px", overflowX: "hidden" }}>
            <div className="prod">
              <ProductCard />
              {/* <Dialog>
                <DialogTrigger asChild>
                <Button asChild size="sm" className="ml-auto gap-1">
                <a href="#">
                <Plus className='mr-2 h-4 w-4' />
                  Add a New Product
                </a>
              </Button>
              </DialogTrigger>

              <DialogContent>
              <DialogHeader>
              <DialogTitle>Add a new Product</DialogTitle>
              <DialogDescription>
                You can find device name on website or on the device itself.
              </DialogDescription>
              </DialogHeader>
              <div className='grid gap-4 py-4'>
              <div className='grid gap-2'>
                <div className="relative">
                <DialogDescription className="absolute left-2.5 top-2.5 h-4 w-4 text-muted-foreground" />
                <Input
                type="string"
                placeholder="New Product Name"
                className="pl-8 my-2 sm:w-[300px] md:w-[200px] lg:w-[300px]"
                onChange={handleChange}
                value={newProduct.product_name}
                />
                <Input
                type="string"
                placeholder="New Product Model Number"
                className="pl-8 my-2 sm:w-[300px] md:w-[200px] lg:w-[300px]"
                onChange={handleChange}
                value={newProduct.model_number}
                />
                <Input
                type="string"
                placeholder="New Product Price"
                className="pl-8 sm:w-[300px] md:w-[200px] lg:w-[300px]"
                onChange={handleChange}
                value={newProduct.product_price}
                />              
            </div>
                <Label htmlFor='url'>   Device Name</Label>
              </div>
            </div>
            <DialogFooter>
              <Button onClick = {postDevice}>Add</Button>
              <Button>Add</Button>
            </DialogFooter>
          </DialogContent>
        </Dialog> */}
            </div>
            <ScrollBar orientation="horizontal" />
          </ScrollArea>
        </div>
        <div>
         {/* <Button
            onClick={() => {
            }}>
            <BsPlusCircle className="mr-2 h-4 w-4" />
            Add to cart
          </Button> */}
        </div>
      </TabsContent>
      
    </Tabs>
  )
}
