import * as React from "react"

import { Button } from "@/components/ui/button"
import {
  Card,
  CardContent,
  CardFooter,
} from "@/components/ui/card"
import { Label } from "@/components/ui/label"
import'./ProductCard.css'
export default function ProductCard() {
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
        <Button variant="outline" className="btn">Add to Cart</Button>
        </div>
        </div>
      </CardContent>
    </Card>
  )
}
