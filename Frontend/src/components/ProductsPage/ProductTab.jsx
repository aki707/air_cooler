import React from "react"
import { ScrollArea, ScrollBar } from "@/components/ui/scroll-area"
import { Separator } from "@/components/ui/separator"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { allproducts } from "./allproducts"
import { ProductCard } from "./ProductCard"
export default function ProductTab(){
  return (
    <Tabs defaultValue="music" className="h-full space-y-6">
      {/* <div className="space-between flex items-center">
         <div className="ml-auto mr-4">
          
        </div> 
      </div> */}
      <TabsContent value="music" className="border-none p-0 outline-none">
        <div className="flex items-center justify-between">
          <div className="space-y-1">
            <h2 className="text-2xl font-semibold tracking-tight">
              Listen Now
            </h2>
            <p className="text-sm text-muted-foreground">
              Top picks for you. Updated daily.
            </p>
          </div>
        </div>
        <Separator className="my-4" />
        <div className="relative">
          <ScrollArea>
            <div className="flex space-x-4 pb-4">
              {allproducts.map(album => (
                <ProductCard
                  key={products.name}
                  album={product}
                  className="w-[250px]"
                  aspectRatio="portrait"
                  width={250}
                  height={330}
                />
              ))}
            </div>
            <ScrollBar orientation="horizontal" />
          </ScrollArea>
        </div>
      </TabsContent>
      
    </Tabs>
  )
}
