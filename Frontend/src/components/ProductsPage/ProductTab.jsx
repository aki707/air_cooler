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
        <div className="relative" style={{ height: "320px" }}>
          <ScrollArea style={{  height: "345px" ,width: "1050px", overflowX: "hidden" }}>
            <div className="prod">
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
