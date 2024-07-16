import React from "react"
import { ScrollArea, ScrollBar } from "@/components/ui/scroll-area"
import { Separator } from "@/components/ui/separator"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { Button } from "@mui/material"
import ProductCard from "./ProductCard"
import './ProductTab.css'
export default function ProductTab(){
  return (
    <Tabs defaultValue="music" className="h-full space-y-6">
      <TabsContent value="music" className="border-none p-0 outline-none">
        <Separator className="my-4" />
        <div className="relative" style={{ border:'2px solid red',height: "320px" ,width:'80%',}}>
          <ScrollArea style={{ height: "345px" ,width: '100vw', overflowX: "hidden" }}>
            <div className="prod flex flex-col items-center justify-between sm:flex-row">
              <ProductCard />
              <ProductCard />
              <ProductCard />
              <ProductCard /> 
              <ProductCard />
              
              <ProductCard />
              <ProductCard /> 
              <ProductCard />
              <ProductCard />
              <ProductCard /> 
              <ProductCard />
              <ProductCard />
              <ProductCard /> 
              <ProductCard />
            </div>
            <ScrollBar orientation="horizontal" />
          </ScrollArea>
        </div>
        {/* <div>
         <Button
            onClick={() => {
            }}>
            <BsPlusCircle className="mr-2 h-4 w-4" />
            Add to cart
          </Button>
        </div> */}
      </TabsContent>
      
    </Tabs>
  )
}
