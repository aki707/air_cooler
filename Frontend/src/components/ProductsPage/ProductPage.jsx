import {  ListFilter} from "lucide-react"
import { Button } from "@/components/ui/button"
import { NavLink } from "react-router-dom"
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card"
import {
  DropdownMenu,
  DropdownMenuCheckboxItem,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
  DropdownMenuLabel,
  DropdownMenuSeparator,
} from "@/components/ui/dropdown-menu"
import { Input } from "@/components/ui/input"
import {
  Tabs,
  TabsContent,
  TabsList,
} from "@/components/ui/tabs"
import ReactDOM from 'react-dom';
import CartIcon from '../CartPage/CartIcon';
import React from 'react';
import Cart from "../CartPage/Cart"
import './ProductPage.css'
import Navbar from "../DevicesPage/Navbar"
import ProductTab from "./ProductTab"
import Cartnum from "../CartPage/CartIcon"
export default function ProductPage() {
  return (
    <div  className=" flex min-h-screen w-full flex-col bg-muted/40">
        <div className="flex flex-col gap-4 p-4 sm:px-6 sm:py-0 md:gap-8">
          
            < Navbar />
          
        <main className="grid flex-1 items-start gap-4 p-4 sm:px-6 sm:py-0 md:gap-8">
          <div style={{width:'100%', overflow:'hidden'}}><Tabs defaultValue="all">
            <div className="flex items-center w-auto">
            <div className="Search">
            <Input
              type="search"
              placeholder="Search..."
              className="w-full rounded-lg bg-background pl-8 md:w-[200px] lg:w-[336px]"
            />
            </div>
              <div className="ml-auto flex items-center gap-2">
                <DropdownMenu>
                  <DropdownMenuTrigger asChild>
                    <Button variant="outline" size="sm" className="h-8 gap-1">
                      <ListFilter className="h-3.5 w-3.5" />
                      <span className="sr-only sm:not-sr-only sm:whitespace-nowrap">
                        Filter
                      </span>
                    </Button>
                  </DropdownMenuTrigger>
                  <DropdownMenuContent align="end">
                    <DropdownMenuLabel>Filter by</DropdownMenuLabel>
                    <DropdownMenuSeparator />
                    <DropdownMenuCheckboxItem checked>
                        Price: Low to High
                    </DropdownMenuCheckboxItem>
                    <DropdownMenuCheckboxItem>
                        Price: High to Low
                    </DropdownMenuCheckboxItem>
                    <DropdownMenuCheckboxItem checked>
                      Newest
                    </DropdownMenuCheckboxItem>
                    <DropdownMenuCheckboxItem>
                      Oldest
                    </DropdownMenuCheckboxItem>
                    <DropdownMenuCheckboxItem>
                       Discounts: High to Low
                    </DropdownMenuCheckboxItem>
                  </DropdownMenuContent>
                </DropdownMenu>
             {/* <DropdownMenu>
                  <DropdownMenuTrigger asChild>
                    <Button size="sm" variant="outline" className="h-8 gap-1">
                  <File className="h-3.5 w-3.5" />
                  <span className="sr-only sm:not-sr-only sm:whitespace-nowrap">
                    Sort
                  </span>
                </Button>
                  </DropdownMenuTrigger>
                  <DropdownMenuContent align="end">
                    <DropdownMenuLabel>Sort by</DropdownMenuLabel>
                    <DropdownMenuSeparator />
                    <DropdownMenuCheckboxItem checked>
                      Newest
                    </DropdownMenuCheckboxItem>
                    <DropdownMenuCheckboxItem>Oldest</DropdownMenuCheckboxItem>
                    <DropdownMenuCheckboxItem>
                       Discounts: High to Low
                    </DropdownMenuCheckboxItem>
                  </DropdownMenuContent>
                </DropdownMenu>  */}
              </div>
            </div>
            <TabsContent value="all">
              <Card x-chunk="dashboard-06-chunk-0">
                <CardHeader>
                  <CardTitle>
                    <div className="cart">
                      All Products
                      {/* <NavLink to="#"> <CartIcon /> </NavLink> */}
                      < Cart />
                    </div>
                  </CardTitle>
                  <CardDescription>
                    <div>
                    Here you can view all the products
                    {/* <button> Cart </button> */}
                    </div>
                  </CardDescription>
                  <ProductTab />
                </CardHeader>
                {/* <CardFooter>
                  <div className="text-xs text-muted-foreground">
                    Showing <strong>1-10</strong> of <strong>32</strong>{" "}
                    products
                  </div>
                </CardFooter> */}
              </Card>
            </TabsContent>
          </Tabs>
          </div>
        </main>
      </div>
    </div>
  )
}
